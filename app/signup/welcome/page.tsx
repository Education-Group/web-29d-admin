'use client'
import React from 'react'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { CheckCircle, MoveLeftIcon, MoveRightIcon } from 'lucide-react'
import { useWelcomeForm } from './useWelcomeForm'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

export default function Welcome() {
    const {
        name,
        isNameTab,
        setName,
        isLoading,
        signupMutation,
        handleSubmitName,
        setLevel,
        level,
        subTitle,
        onBack,
        handleRegister
    } = useWelcomeForm()

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
            <div className='max-w-lg mx-auto px-6 text-center'>
                {/* Success Alert */}
                <div className='mb-8'>
                    <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                        Chào mừng đến với
                    </h1>
                    <h1 className='text-4xl font-bold text-[#FAAC2D]'>
                        29diemdaihoc
                    </h1>
                </div>

                <p className='text-gray-500 text-lg mb-8'>
                    {subTitle}
                </p>

                {isNameTab && <form onSubmit={handleSubmitName} className='space-y-6'>

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
                }
                {!isNameTab && (
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <div onClick={() => setLevel(1)} className={cn('flex-1 p-4 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100', level === 1 && 'bg-primary text-white border-none hover:bg-primary font-bold select-none')}>Level 1</div>
                        <div onClick={() => setLevel(2)} className={cn('flex-1 p-4 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100', level === 2 && 'bg-primary text-white border-none hover:bg-primary font-bold select-none')}>Level 2</div>
                        <div onClick={() => setLevel(3)} className={cn('flex-1 p-4 bg-gray-50 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-100', level === 3 && 'bg-primary text-white border-none hover:bg-primary font-bold select-none')}>Level 3</div>
                    </div>
                )}

                {!isNameTab && <div className='flex items-center w-fit mx-auto gap-4 mt-6'>
                    <Button variant='outline' size='lg' className='hover:bg-primary hover:text-white cursor-pointer hover:border-none' onClick={onBack}>
                        <div className='flex items-center gap-2'>
                            <MoveLeftIcon/>
                            <span>Quay lại</span>
                        </div>
                    </Button>
                    <Button variant='outline' size='lg'  disabled={!level} className='flex items-center gap-2 hover:bg-primary hover:text-white cursor-pointer hover:border-none' onClick={handleRegister}  >
                        <div className='flex items-center gap-2'>
                            <span>Tiếp tục</span>
                            <MoveRightIcon/>
                        </div>
                    </Button>
                </div>}
            </div>
        </div>
    )
}
