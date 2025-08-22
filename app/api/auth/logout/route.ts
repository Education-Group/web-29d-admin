import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const cookieStore = await cookies()
  const authToken = cookieStore.get('auth-token')?.value
  if (!authToken) {
    return NextResponse.json({ message: 'Không tìm thấy token' }, { status: 401 })
  }

  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL
  if (!apiBaseUrl) {
    return NextResponse.json({ message: 'Chưa cấu hình API_BASE_URL' }, { status: 500 })
  }

  const logoutPath = process.env.API_AUTH_LOGOUT_PATH

  const upstreamResponse = await fetch(`${apiBaseUrl}${logoutPath}`, {
    method: 'POST',
    headers: { 
        'Content-Type': 'application/json',
        'authorization': `Bearer ${authToken}`
    },
  })

  console.log('upstreamResponse`', upstreamResponse)
  if (!upstreamResponse.ok) {
    return NextResponse.json({ message: 'Đăng xuất thất bại' }, { status: upstreamResponse.status })
  }

  const response = NextResponse.json({ message: 'Đăng xuất thành công' }, { status: 200 })
  response.cookies.set('auth-token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  })

  response.cookies.set('name', '', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  })

  response.cookies.set('email', '', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  })

  response.cookies.set('auth-state', '', {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0
  })

  return response
}