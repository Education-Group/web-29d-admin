'use client'
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'

type LoginPayload = { 
  email: string; 
  password: string; 

}
type LoginResponse = { 
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

export function useLogin(
    options?: UseMutationOptions<LoginResponse, Error, LoginPayload>
): UseMutationResult<LoginResponse, Error, LoginPayload> {
    return useMutation<LoginResponse, Error, LoginPayload>({
        mutationFn: async (payload: LoginPayload) => {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            })
            const data = await response.json()
            if (!response.ok) {
                throw new Error(data?.message || 'Có lỗi xảy ra khi đăng nhập!')
            }
            return data as LoginResponse
        },
        ...options,
    })
}


