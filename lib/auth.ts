// Utility functions for authentication management

const getCookie = (name: string): string | null => {
  const cookies = document.cookie.split(';')
  const found = cookies.find(cookie => cookie.trim().startsWith(`${name}=`))
  return found ? found.split('=')[1] : null
}

export const setAuthToken = (token: string) => {
  // Legacy: setting non-HttpOnly token (not recommended). Prefer server to set HttpOnly cookie.
  document.cookie = `auth-token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`
  document.cookie = `auth-state=1; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`
}

export const getAuthToken = (): string | null => {
  // Client cannot read HttpOnly cookies; this returns value only if token was set client-side
  return getCookie('auth-token')
}

export const removeAuthToken = () => {
  // Remove cookies
  document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  document.cookie = 'auth-state=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
}

export const isAuthenticated = (): boolean => {
  // Dựa trên cờ auth-state (không HttpOnly) và đã hoàn tất onboarding
  const hasAuthState = getCookie('auth-state') === '1'
  const hasCompletedOnboarding = !!localStorage.getItem('userName')
  return hasAuthState && hasCompletedOnboarding
}

export const logout = () => {
  removeAuthToken()
  localStorage.removeItem('userName')
  window.location.href = '/signup'
}

// Function to handle successful login/signup (client-side flows)
export const handleSuccessfulAuth = (token: string, userData?: any) => {
  // Set client-visible auth-state; token should be set by server in real flows
  document.cookie = `auth-state=1; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`
  if (userData?.name) {
    localStorage.setItem('userName', userData.name)
  }
  // Redirect to welcome page
  window.location.href = '/welcome'
}
