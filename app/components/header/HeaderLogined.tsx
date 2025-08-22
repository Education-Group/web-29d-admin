import { ChevronDown, CircleUserRound } from 'lucide-react'
import React from 'react'
import Image from 'next/image'
import LOGO from "@/public/icons/logo_29d.png";
import Link from 'next/link'
import { cookies } from 'next/headers'
import { UserDialog } from './UserDialog';

export default async function HeaderLogined() {
  const cookieStore = await cookies()
  const name = cookieStore.get('name')?.value || ''
  const email = cookieStore.get('email')?.value || ''

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 md:px-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <Image src={LOGO} alt="logo" width={64} height={64} />
            </div>
            <div className='flex items-center gap-4'>
              <div>
                <input type="text" placeholder='Tìm kiếm' className='w-full border border-gray-200 rounded-md p-2' />
              </div>
              <a href="#features" className="neutral-950 hover:text-primary/80 px-3 py-2 rounded-md text-xl font-medium flex items-center">
                Trang chủ
              </a>
              <a href="#testimonials" className="neutral-950 hover:text-primary/80 px-3 py-2 rounded-md text-xl font-medium flex items-center gap-2">
                Khoá học
                <ChevronDown />
              </a>
              <a href="#testimonials" className="neutral-950 hover:text-primary/80 px-3 py-2 rounded-md text-xl font-medium flex items-center gap-2">
                Đề thi
                <ChevronDown />

              </a>
            </div>


          </div>
          <div className="hidden md:block">
            <UserDialog name={name} email={email} />
          </div>
        </div>
      </div>
    </nav>
  )
}