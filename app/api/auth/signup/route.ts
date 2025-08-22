import { NextRequest, NextResponse } from 'next/server'

// Proxy signup to external API server
export async function POST(request: NextRequest) {
  try {
    const { email, password, name, userLevel } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ message: 'Email và mật khẩu là bắt buộc' }, { status: 400 })
    }

    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL
    if (!apiBaseUrl) {
      return NextResponse.json({ message: 'Chưa cấu hình API_BASE_URL' }, { status: 500 })
    }

    const signupPath = process.env.API_AUTH_SIGNUP_PATH
    const upstreamResponse = await fetch(`${apiBaseUrl}${signupPath}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, name, userLevel })
    })

    const upstreamData = await upstreamResponse.json().catch(() => ({}))
    console.log('upstreamData`', upstreamData)

    if (!upstreamResponse.ok) {
      const message = upstreamData?.message || 'Đăng ký thất bại'
      return NextResponse.json({ message }, { status: upstreamResponse.status })
    }

    // Expect the backend to return a token and user info
    const token: string | undefined = upstreamData.data?.accessToken

    if (!token) {
      return NextResponse.json({ message: 'Thiếu token từ máy chủ' }, { status: 502 })
    }

    const response = NextResponse.json({ 
      message: upstreamData.message,
      result_code: upstreamData.result_code,
      data: upstreamData.data 
    }, { status: 200 })
    console.log('response`', response)
    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })
    // Non-HttpOnly flag so client-side can detect authenticated state
    response.cookies.set('auth-state', '1', {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })

    response.cookies.set('name', name, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })

    response.cookies.set('email', email, {
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7
    })

    return response
  } catch (error) {
    console.error('Signup proxy error:', error)
    return NextResponse.json({ message: 'Lỗi máy chủ' }, { status: 500 })
  }
}

// Optional: quick probe to confirm route is mounted
export async function GET() {
  return NextResponse.json({ message: 'Use POST /api/auth/signup' }, { status: 405 })
}


