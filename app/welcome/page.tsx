'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getAuthToken } from '@/lib/auth'
import { useSignup } from '@/lib/hooks/useSignup'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, X } from 'lucide-react'

export default function Welcome() {
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [tempRegister, setTempRegister] = useState<string | null>(null)
    const router = useRouter()
    const signupMutation = useSignup({
        onSuccess: (result) => {
            console.log('Signup successful:', result)

            // Store complete response data in localStorage for future use
            localStorage.setItem('signupResponse', JSON.stringify(result))

            // Store individual user fields for easy access
            if (result.data?.user) {
                localStorage.setItem('userName', result.data.user.name)
                localStorage.setItem('userEmail', result.data.user.email)
                localStorage.setItem('userId', result.data.user.id.toString())
                localStorage.setItem('userRole', result.data.user.role)
                localStorage.setItem('userLevel', result.data.user.userLevel.toString())
                localStorage.setItem('userAvatar', result.data.user.avatar || '')
                localStorage.setItem('userIsActive', result.data.user.isActive.toString())
                localStorage.setItem('userCreatedAt', result.data.user.createdAt)
                localStorage.setItem('userUpdatedAt', result.data.user.updatedAt)
            }

            // Store access token info (for reference, actual token is in HttpOnly cookie)
            if (result.data?.accessToken) {
                localStorage.setItem('hasAccessToken', 'true')
                localStorage.setItem('tokenExpiry', new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()) // 24 hours from now
            }

            // Remove temp register data
            localStorage.removeItem('temp-register')

            // Auto-hide alert after 3 seconds and redirect
            setTimeout(() => {
                router.replace('/')
            }, 5000)
        },
        onError: (error) => {
            console.error('Signup failed:', error)
            // Handle error - you might want to show a toast or error message
        }
    })

    useEffect(() => {
        // Access localStorage only on client side
        const tempReg = localStorage.getItem('temp-register')
        setTempRegister(tempReg)
        setIsLoading(false)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim()) {
            const { email, password } = JSON.parse(tempRegister || '{}')
            if (!email || !password) {
                console.log('Missing email or password from temp register')
                return
            }

            signupMutation.mutate({
                email,
                password,
                name: name.trim(),
                userLevel: 1
            })
        }
    }

    if (signupMutation.isPending) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#FAAC2D]"></div>
            </div>
        )
    }

    if (signupMutation.isSuccess) return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className='max-w-md'>
                <Alert variant="success" className="border-green-500 bg-green-50">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Đăng ký thành công!</AlertTitle>
                    <AlertDescription className="text-green-700">
                        Tài khoản của bạn đã được tạo thành công. Bạn sẽ được chuyển hướng trong giây lát...
                    </AlertDescription>
                </Alert>
            </div>

        </div>
    )

    return (
        <div className='flex justify-center items-center h-screen bg-white'>
            <div className='max-w-md mx-auto px-6 text-center'>
                {/* Success Alert */}
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
                        type="submit"
                        disabled={!name.trim()}
                        className={`w-full p-4 text-lg font-medium rounded-xl transition-colors flex items-center justify-center gap-2 ${name.trim()
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
