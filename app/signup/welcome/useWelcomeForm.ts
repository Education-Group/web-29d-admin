import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useSignup } from '@/lib/hooks/useSignup'

export const useWelcomeForm = () => {
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab')
    const [name, setName] = useState('')
    const [level, setLevel] = useState<number | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [tempRegister, setTempRegister] = useState<string | null>(null)
    const router = useRouter()
    const subTitle = tab === 'name' ? 'Cho chúng mình một chút thông tin về bạn nhé 😊' : 'Bạn đang ở “level” nào? Chúng mình sẽ gợi ý khóa học phù hợp dành cho bạn 😉'

    const isNameTab = tab === 'name'

    const signupMutation = useSignup({
        onSuccess: (result) => {
            console.log('Signup successful:', result)

            // Store complete response data in localStorage for future use
            localStorage.setItem('signupResponse', JSON.stringify(result))

            // Store individual user fields for easy access
            if (result.data?.user) {
                localStorage.setItem('name', result.data.user.name)
                localStorage.setItem('email', result.data.user.email)
                localStorage.setItem('userId', result.data.user.id.toString())
                localStorage.setItem('role', result.data.user.role)
                localStorage.setItem('userLevel', result.data.user.userLevel.toString())
                localStorage.setItem('avatar', result.data.user.avatar || '')
                localStorage.setItem('isActive', result.data.user.isActive.toString())
                localStorage.setItem('createdAt', result.data.user.createdAt)
                localStorage.setItem('updatedAt', result.data.user.updatedAt)
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

    const handleSubmitName = async (e: React.FormEvent) => {
        e.preventDefault()
        if (name.trim()) {
            const { email, password } = JSON.parse(tempRegister || '{}')
            if (!email || !password || !name.trim()) {
                return
            }
            const params = new URLSearchParams(searchParams)
            params.set('tab', 'level')
            router.push(`/signup/welcome?${params.toString()}`)
            // signupMutation.mutate({
            //     email,
            //     password,
            //     name: name.trim(),
            //     userLevel: 1
            // })
        }
    }
    const handleRegister = () => {
        const { email, password } = JSON.parse(tempRegister || '{}')
        if (!email || !password || !name.trim()) {
            return
        }
        if(!name.trim() || !level) {
            return
        }
        signupMutation.mutate({
            email,
            password,
            name: name.trim(),
            userLevel: level
        })
    }
    const onBack = () => {
        const params = new URLSearchParams(searchParams)
        params.set('tab', 'name')
        router.replace(`/signup/welcome?${params.toString()}`)
    }

    return {
        name,
        setName,
        isNameTab,
        isLoading,
        tempRegister,
        signupMutation,
        handleSubmitName,
        setLevel,
        level,
        subTitle,
        onBack,
        handleRegister
    }
}
