'use client'
import FacebookBlueIcon from '@/public/icons/FacebookBlueIcon'
import GoogleIcon from '@/public/icons/GoogleIcon'
import React, { useState, useEffect } from 'react'
import { handleSuccessfulAuth } from '@/lib/auth'

export default function Signup() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [passwordValidation, setPasswordValidation] = useState({
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [hasStartedTyping, setHasStartedTyping] = useState(false)

    const validatePassword = (password: string) => {
        const validations = {
            minLength: password.length >= 8,
            hasUpperCase: /[A-Z]/.test(password),
            hasLowerCase: /[a-z]/.test(password),
            hasNumber: /\d/.test(password),
            hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
        }
        setPasswordValidation(validations)
        return Object.values(validations).every(Boolean)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))

        if (name === 'password') {
            if (!hasStartedTyping && value.length > 0) {
                setHasStartedTyping(true)
            }
            validatePassword(value)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const isPasswordValid = validatePassword(formData.password)
        
        if (!isPasswordValid) {
            alert('Vui lòng kiểm tra lại yêu cầu mật khẩu!')
            return
        }
        
        try {
            // TODO: Gọi API đăng ký thực tế
            // const response = await fetch('/api/auth/signup', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // })
            // const data = await response.json()
            
            // Tạm thời tạo mock token và user data
            const mockToken = 'mock-jwt-token-' + Date.now()
            const mockUserData = { email: formData.email, name: formData.email.split('@')[0] }
            
            // Xử lý đăng ký thành công
            handleSuccessfulAuth(mockToken, mockUserData)
            
        } catch (error) {
            console.error('Signup error:', error)
            alert('Có lỗi xảy ra khi đăng ký!')
        }
    }

    const isPasswordValid = Object.values(passwordValidation).every(Boolean)

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <p className='font-black text-6xl font-darker leading-12'>Đăng ký tài khoản</p>
                    <p className='text-neutral-500 mt-2'>Đăng ký trở thành thành viên ngay hôm nay để không bỏ lỡ thông tin về đề thi THPTQG môn Toán</p>
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
                            <div className='flex items-center gap-2 px-4'>
                                <div className="flex items-start gap-2">
                                    <span className="mt-1 w-1.5 h-5 bg-[#FAAC2D] rounded-sm inline-block"></span>
                                    <p className="text-neutral-800 font-inter font-medium text-xl">
                                        Mật khẩu phải có tối thiểu 8 ký tự, bao gồm chữ in hoa, chữ viết thường, số và ký tự đặc biệt
                                    </p>
                                </div>
                            </div>
                            {hasStartedTyping && (
                                <div className='mt-4 px-4 flex flex-wrap gap-4'>
                                    <div className={`flex items-center gap-1 ${passwordValidation.minLength ? 'text-green-600' : 'text-red-500'}`}>
                                        <span className="text-sm">{passwordValidation.minLength ? '✓' : '✗'}</span>
                                        <span className="font-inter text-xs">8 ký tự</span>
                                    </div>
                                    <div className={`flex items-center gap-1 ${passwordValidation.hasUpperCase ? 'text-green-600' : 'text-red-500'}`}>
                                        <span className="text-sm">{passwordValidation.hasUpperCase ? '✓' : '✗'}</span>
                                        <span className="font-inter text-xs">Chữ hoa</span>
                                    </div>
                                    <div className={`flex items-center gap-1 ${passwordValidation.hasLowerCase ? 'text-green-600' : 'text-red-500'}`}>
                                        <span className="text-sm">{passwordValidation.hasLowerCase ? '✓' : '✗'}</span>
                                        <span className="font-inter text-xs">Chữ thường</span>
                                    </div>
                                    <div className={`flex items-center gap-1 ${passwordValidation.hasNumber ? 'text-green-600' : 'text-red-500'}`}>
                                        <span className="text-sm">{passwordValidation.hasNumber ? '✓' : '✗'}</span>
                                        <span className="font-inter text-xs">Số</span>
                                    </div>
                                    <div className={`flex items-center gap-1 ${passwordValidation.hasSpecialChar ? 'text-green-600' : 'text-red-500'}`}>
                                        <span className="text-sm">{passwordValidation.hasSpecialChar ? '✓' : '✗'}</span>
                                        <span className="font-inter text-xs">Ký tự đặc biệt</span>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center mt-6">
                            <input
                                type="checkbox"
                                id="terms"
                                className="w-5 h-5 accent-primary rounded border-gray-300 outline-none"
                                style={{ accentColor: '#FAAC2D' }}
                                required
                            />
                            <label htmlFor="terms" className="ml-3 text-neutral-800 font-inter text-lg select-none">
                                Tôi đồng ý với chính sách&nbsp;
                                <a href="#" className="text-primary-600 font-semibold underline hover:text-[#d9911f]">điều khoản</a>
                                &nbsp;và&nbsp;
                                <a href="#" className="text-primary-600 font-semibold underline hover:text-[#d9911f]">điều kiện</a>
                            </label>
                        </div>
                        <div className='mt-6'>
                            <button 
                                type="submit"
                                disabled={!isPasswordValid}
                                className={`w-full p-4 font-inter font-medium text-xl outline-none rounded-xl transition-colors ${
                                    isPasswordValid 
                                        ? 'bg-primary text-white hover:bg-[#d9911f]' 
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                Đăng ký với Email
                            </button>
                        </div>
                        <div className='mt-6 text-center text-lg'>
                            <span  className='text-neutral-500 font-medium'>Đã có tài khoản?</span>&nbsp;
                            <a href="" className='text-primary-600 font-bold'>Đăng nhập</a>
                        </div>
                        <div className="flex items-center my-6">
                            <div className="flex-grow h-px bg-neutral-200"></div>
                            <span className="mx-4 text-neutral-500 font-medium text-lg">hoặc</span>
                            <div className="flex-grow h-px bg-neutral-200"></div>
                        </div>
                    </form>
                <button
                    type="button"
                    className="cursor-pointer w-full flex items-center justify-center gap-3 p-4 mb-4 border border-neutral-200 rounded-xl bg-white hover:bg-neutral-50 transition-colors"
                >
                    <GoogleIcon/>
                    <span className="font-inter text-neutral-800 text-lg font-medium">Tiếp tục với Google</span>
                </button>

                <button
                    type="button"
                    className="cursor-pointer w-full flex items-center justify-center gap-3 p-4 mb-4 border border-neutral-200 rounded-xl bg-white hover:bg-neutral-50 transition-colors"
                >
                    <FacebookBlueIcon/>
                    <span className="font-inter text-neutral-800 text-lg font-medium">Tiếp tục với Facebook</span>
                </button>

                </div>
            </div>
        </div>
    )
}