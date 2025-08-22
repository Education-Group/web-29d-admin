'use client'
import { useState } from 'react'
import { useSignup } from '@/lib/hooks/useSignup'
import { useRouter } from 'next/navigation'

type FormData = {
    email: string
    password: string
}

type PasswordValidation = {
    minLength: boolean
    hasUpperCase: boolean
    hasLowerCase: boolean
    hasNumber: boolean
    hasSpecialChar: boolean
}

export function useSignupForm() {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' })
    const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
        minLength: false,
        hasUpperCase: false,
        hasLowerCase: false,
        hasNumber: false,
        hasSpecialChar: false
    })
    const [showPassword, setShowPassword] = useState(false)
    const [hasStartedTyping, setHasStartedTyping] = useState(false)

    const validatePassword = (password: string) => {
        const validations: PasswordValidation = {
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
        setFormData(prev => ({ ...prev, [name]: value }))

        if (name === 'password') {
            if (!hasStartedTyping && value.length > 0) {
                setHasStartedTyping(true)
            }
            validatePassword(value)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const ok = validatePassword(formData.password)
        if (!ok) {
            alert('Vui lòng kiểm tra lại yêu cầu mật khẩu!')
            return
        }
        localStorage.setItem('temp-register', JSON.stringify({ email: formData.email, password: formData.password }))
        router.push('/signup/welcome?tab=name')
        // await signupMutation.mutateAsync({ email: formData.email, password: formData.password })
    }

    const isPasswordValid = Object.values(passwordValidation).every(Boolean)

    return {
        formData,
        handleInputChange,
        passwordValidation,
        showPassword,
        setShowPassword,
        hasStartedTyping,
        isPasswordValid,
        handleSubmit,
    }
}


