import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const code = searchParams.get('code')
  const error = searchParams.get('error')
  
  if (error) {
    console.error('Google OAuth error:', error)
    return NextResponse.redirect(new URL('/signup?error=oauth_error', request.url))
  }
  
  if (!code) {
    return NextResponse.redirect(new URL('/signup?error=no_code', request.url))
  }
  
  try {
    // Exchange authorization code for access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI!,
        grant_type: 'authorization_code',
      }),
    })
    
    const tokenData = await tokenResponse.json()
    
    if (!tokenResponse.ok) {
      console.error('Token exchange failed:', tokenData)
      return NextResponse.redirect(new URL('/signup?error=token_exchange_failed', request.url))
    }
    
    // Get user info using access token
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    })
    
    const userData = await userResponse.json()
    
    if (!userResponse.ok) {
      console.error('User info fetch failed:', userData)
      return NextResponse.redirect(new URL('/signup?error=user_info_failed', request.url))
    }
    
    // TODO: Lưu thông tin user vào database
    console.log('User data:', userData)
    
    // Tạo auth token (trong thực tế sẽ tạo JWT token)
    const authToken = 'google-auth-' + Date.now()
    
    // Redirect to welcome page với auth token
    const response = NextResponse.redirect(new URL('/welcome', request.url))
    response.cookies.set('auth-token', authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })
    
    return response
    
  } catch (error) {
    console.error('Google OAuth callback error:', error)
    return NextResponse.redirect(new URL('/signup?error=callback_error', request.url))
  }
}
