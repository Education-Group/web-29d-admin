'use client'
import { useState } from 'react'
import { useSignup } from '@/lib/hooks/useSignup'
import { useRouter } from 'next/navigation'
import { useLogin } from '@/lib/hooks/useLogin'

type FormData = {
    email: string
    password: string
}


export function useLoginForm() {
    const router = useRouter()
    const [formData, setFormData] = useState<FormData>({ email: '', password: '' })

    const [showPassword, setShowPassword] = useState(false)

    const loginMutation = useLogin({
        onSuccess: (data) => {
            console.log('data`', data)
            if (data.result_code === 200) {
                router.replace('/')
            }
        }
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        loginMutation.mutate({ email: formData.email, password: formData.password })
    }

    return {
        formData,
        handleInputChange,
        showPassword,
        setShowPassword,
        handleSubmit,
        isPending: loginMutation.isPending,
    }
}


