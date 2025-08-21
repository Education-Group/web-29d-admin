'use client'
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'

type SignupPayload = { 
  email: string; 
  password: string; 
  name?: string; 
  userLevel?: number 
}
type SignupResponse = { 
  message: string;
  result_code: number;
  data: {
    user: {
      id: number;
      email: string;
      name: string;
      userLevel: number;
      role: string;
      avatar: string | null;
      googleId: string | null;
      isActive: boolean;
      createdAt: string;
      updatedAt: string;
    };
    accessToken: string;
  }
}

export function useSignup(
    options?: UseMutationOptions<SignupResponse, Error, SignupPayload>
): UseMutationResult<SignupResponse, Error, SignupPayload> {
    return useMutation<SignupResponse, Error, SignupPayload>({
        mutationFn: async (payload: SignupPayload) => {
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data?.message || 'Có lỗi xảy ra khi đăng ký!')
            }
            return data as SignupResponse
        },
        ...options,
    })
}


