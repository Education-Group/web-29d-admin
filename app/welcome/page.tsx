'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAuthToken } from '@/lib/auth'

export default function Welcome() {
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        // Kiểm tra xem có auth token không
        const token = getAuthToken()
        if (!token) {
            router.replace('/signup')
            return
        }
        setIsLoading(false)
    }, [router])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim()) {
            // Lưu tên người dùng vào localStorage hoặc state management
            localStorage.setItem('userName', name.trim())
            // Chuyển đến trang dashboard
            router.push('/dashboard')
        }
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FAAC2D]"></div>
            </div>
        )
    }

    return (
        <div className='flex justify-center items-center h-screen bg-white'>
            <div className='max-w-md mx-auto px-6 text-center'>
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                        Chào mừng đến
                    </h1>
                    <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                        với
                    </h1>
                    <h1 className='text-4xl font-bold text-[#FAAC2D]'>
                        29diemdaihoc
                    </h1>
                </div>
                
                <p className='text-gray-500 text-lg mb-8'>
                    Cho chúng mình một chút thông tin về bạn nhé 😊
                </p>
                
                <form onSubmit={handleSubmit} className='space-y-6'>
                    <div>
                        <input
                            type='text'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder='Tên của bạn là...'
                            className='w-full p-4 text-lg bg-gray-50 border border-gray-200 rounded-xl outline-none focus:border-[#FAAC2D] transition-colors'
                            required
                        />
                    </div>
                    
                    <button
                        type='submit'
                        disabled={!name.trim()}
                        className={`w-full p-4 text-lg font-medium rounded-xl transition-colors flex items-center justify-center gap-2 ${
                            name.trim() 
                                ? 'bg-[#FAAC2D] text-white hover:bg-[#d9911f]' 
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                    >
                        <span>Tiếp tục</span>
                        <svg 
                            className="w-5 h-5" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M9 5l7 7-7 7" 
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}
