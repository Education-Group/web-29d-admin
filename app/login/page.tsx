'use client'
import React from 'react'
import { useLoginForm } from './useLoginForm'
import Loading from '@/components/Loading'

export default function Login() {
    const {
        formData,
        handleInputChange,
        showPassword,
        setShowPassword,
        handleSubmit,
        isPending,
        isSuccess,
    } = useLoginForm()


    const isActiveForm = formData.email && formData.password

    if (isPending) return <Loading/>
    if (isSuccess) return <div></div>
    return (
        <div className='flex justify-center items-center h-screen px-4'>
            <div className='w-full mx-auto transform lg:-translate-y-1/2 lg:max-w-2xl'>
                <div className='text-center'>
                    <p className='font-black text-6xl font-darker'>Đăng nhập</p>
                    <p className='text-neutral-500 mt-4'>Chào mừng quay trở lại 😍</p>
                </div>
                <div className='mt-6'>
                    <form onSubmit={handleSubmit}>
                        <div className='grid grid-cols-1 gap-8'>
                            <div className='flex flex-col gap-2'>
                                <input 
                                    type='email' 
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder='Email' 
                                    className='p-4 font-inter font-medium text-xl outline-none bg-neutral-50 text-neutral-400 rounded-xl' 
                                    required
                                />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <div className='relative'>
                                    <input 
                                        type={showPassword ? 'text' : 'password'} 
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder='Mật khẩu' 
                                        className='p-4 font-inter font-medium text-xl outline-none bg-neutral-50 text-neutral-400 rounded-xl w-full pr-12' 
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                                    >
                                        {showPassword ? '👁️' : '👁️‍🗨️'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='mt-6'>
                            <button 
                                type="submit"
                                disabled={!isActiveForm}
                                className={`w-full p-4 font-inter font-medium text-xl outline-none rounded-xl transition-colors ${
                                    isActiveForm 
                                        ? 'bg-primary text-white hover:bg-[#d9911f]'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                Đăng nhập
                            </button>
                        </div>
                        <div className='mt-6 text-center text-lg'>
                            <span  className='text-neutral-500 font-medium'>Chưa có tài khoản?</span>&nbsp;
                            <a href="" className='text-primary-600 font-bold'>Đăng ký</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}