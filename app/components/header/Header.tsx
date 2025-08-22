import { cookies } from 'next/headers'
import { getServerAuthStatus } from '@/lib/auth'
import HeaderNotLogined from './HeaderNotLogined'
import React from 'react'
import HeaderLogined from './HeaderLogined'

export default async function Header() {
    // Đọc cookies trực tiếp từ server
    const cookieStore = await cookies()
    console.log('cookieStore`', cookieStore)
    const { isAuthenticated } = await getServerAuthStatus(cookieStore)

    if (!isAuthenticated) {
        return <HeaderNotLogined />
    }
    
    return (
        <HeaderLogined />
    )
}