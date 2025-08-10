// Utility functions for authentication management

export const setAuthToken = (token: string) => {
  // Set auth token in cookies
  document.cookie = `auth-token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`
}

export const getAuthToken = (): string | null => {
  // Get auth token from cookies
  const cookies = document.cookie.split(';')
  const authCookie = cookies.find(cookie => cookie.trim().startsWith('auth-token='))
  return authCookie ? authCookie.split('=')[1] : null
}

export const removeAuthToken = () => {
  // Remove auth token from cookies
  document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
}

export const isAuthenticated = (): boolean => {
  // Kiểm tra cả token và localStorage để đảm bảo user đã hoàn thành onboarding
  const hasToken = !!getAuthToken()
  const hasCompletedOnboarding = !!localStorage.getItem('userName')
  return hasToken && hasCompletedOnboarding
}

export const logout = () => {
  removeAuthToken()
  localStorage.removeItem('userName')
  window.location.href = '/signup'
}

// Function to handle successful login/signup
export const handleSuccessfulAuth = (token: string, userData?: any) => {
  setAuthToken(token)
  if (userData?.name) {
    localStorage.setItem('userName', userData.name)
  }
  // Redirect to welcome page
  window.location.href = '/welcome'
}
