import NextAuth from 'next-auth'
import GoogleProvider from '@auth/google-provider'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/signup',
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      // Xử lý logic đăng nhập tùy chỉnh ở đây
      return true
    },
    async session({ session, token }) {
      // Cập nhật session nếu cần
      return session
    },
  },
})

export { handler as GET, handler as POST }
