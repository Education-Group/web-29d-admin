import { NextRequest, NextResponse } from "next/server";
type LoginResponse = {

    message?: string,
    result_code?: number,
    data?: {
        user?: {
            id?: number,
            email?: string,
            name?: string,
            userLevel?: number,
            role?: string,
            avatar?: string,
            googleId?: string,
            isActive?: boolean,
            createdAt?: string,
            updatedAt?: string
        },
        accessToken?: string

    }
}

export async function POST(request: NextRequest) {
    const { email, password } = await request.json()

    if (!email || !password) {
        return NextResponse.json({ message: 'Email và mật khẩu là bắt buộc' }, { status: 400 })
    }


    const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || process.env.API_BASE_URL
    if (!apiBaseUrl) {
        return NextResponse.json({ message: 'Chưa cấu hình API_BASE_URL' }, { status: 500 })
    }

    const loginPath = process.env.API_AUTH_LOGIN_PATH

    const upstreamResponse = await fetch(`${apiBaseUrl}${loginPath}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
    })

    console.log('upstreamResponse`', upstreamResponse)
    if (!upstreamResponse.ok) {
        return NextResponse.json({ message: 'Đăng nhập thất bại' }, { status: upstreamResponse.status })
    }
    const responseData = await upstreamResponse.json() as LoginResponse

    const response = NextResponse.json(responseData, { status: 200 })
    response.cookies.set('auth-token', responseData.data?.accessToken || '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    response.cookies.set('auth-state', '1', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7
    })
    response.cookies.set('name', responseData.data?.user?.name || '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    response.cookies.set('email', responseData.data?.user?.email || '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    response.cookies.set('userId', responseData.data?.user?.id?.toString() || '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    response.cookies.set('role', responseData.data?.user?.role || '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    response.cookies.set('userLevel', responseData.data?.user?.userLevel?.toString() || '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    response.cookies.set('avatar', responseData.data?.user?.avatar || '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    response.cookies.set('isActive', responseData.data?.user?.isActive?.toString() || '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    response.cookies.set('createdAt', responseData.data?.user?.createdAt || '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })
    response.cookies.set('updatedAt', responseData.data?.user?.updatedAt || '', {
        httpOnly: false,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    })

    return response
}