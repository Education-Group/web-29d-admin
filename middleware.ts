import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Chỉ bảo vệ dashboard và profile, để welcome page được xử lý bởi client-side
const strictPrivateRoutes = ['/dashboard', '/profile']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Kiểm tra xem có phải strict private route không
  const isStrictPrivateRoute = strictPrivateRoutes.some(route => pathname.startsWith(route))
  
  // Kiểm tra authentication status
  const isAuthenticated = request.cookies.has('auth-token')
  
  // Chỉ redirect nếu là strict private route và chưa đăng nhập
  if (isStrictPrivateRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/signup', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
