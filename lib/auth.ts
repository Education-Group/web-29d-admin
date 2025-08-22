// Utility functions for authentication management

const isClient = typeof window !== 'undefined' && typeof document !== 'undefined'

// Server-side authentication functions
export const getServerAuthStatus = async (cookieStore: any) => {
  const authState = cookieStore.get('auth-state')?.value
  const authToken = cookieStore.get('auth-token')?.value
  return {
    isAuthenticated: authState === '1' && !!authToken,
    authState,
    authToken
  }
}

// Server-side redirect helper for middleware and server actions
export const shouldRedirectToSignup = (cookieStore: any): boolean => {
  const authState = cookieStore.get('auth-state')?.value
  const authToken = cookieStore.get('auth-token')?.value
  return !(authState === '1' && !!authToken)
}

// Client-side authentication functions
const getCookie = (name: string): string | null => {
  if (!isClient) return null
  
  const cookies = document.cookie.split(';')
  const found = cookies.find(cookie => cookie.trim().startsWith(`${name}=`))
  return found ? found.split('=')[1] : null
}

export const setAuthToken = (token: string) => {
  if (!isClient) return
  
  // Legacy: setting non-HttpOnly token (not recommended). Prefer server to set HttpOnly cookie.
  document.cookie = `auth-token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`
  document.cookie = `auth-state=1; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`
}

export const getAuthToken = (): string | null => {
  // Client cannot read HttpOnly cookies; this returns value only if token was set client-side
  return getCookie('auth-token')
}

export const removeAuthToken = () => {
  if (!isClient) return
  
  // Remove cookies
  document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
  document.cookie = 'auth-state=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
}

export const isAuthenticated = (): boolean => {
  if (!isClient) return false
  
  // Dựa trên cờ auth-state (không HttpOnly) và đã hoàn tất onboarding
  const hasAuthState = getCookie('auth-state') === '1'
  const hasCompletedOnboarding = !!localStorage.getItem('name')
  return hasAuthState && hasCompletedOnboarding
}

export const logout = () => {
  if (!isClient) return
  
  removeAuthToken()
  localStorage.removeItem('userName')
  window.location.href = '/signup'
}

// Function to handle successful login/signup (client-side flows)
export const handleSuccessfulAuth = (token: string, userData?: any) => {
  if (!isClient) return
  
  // Set client-visible auth-state; token should be set by server in real flows
  document.cookie = `auth-state=1; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`
  if (userData?.name) {
    localStorage.setItem('userName', userData.name)
  }
  // Redirect to welcome page
  window.location.href = '/welcome'
}
