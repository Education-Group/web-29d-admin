import Link from "next/link";
import LOGO from "@/public/icons/logo_29d.png";
import Image from "next/image";
import { ChevronDown } from "lucide-react";


export default function HeaderNotLogined() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 md:px-6">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image src={LOGO} alt="logo" width={64} height={64} />
            </div>
            <a href="#features" className="neutral-950 hover:text-primary/80 px-3 py-2 rounded-md text-xl font-medium flex items-center">
              Trang chủ
            </a>
            <a href="#courses" className="neutral-950 hover:text-primary/80 px-3 py-2 rounded-md text-xl font-medium">Blog</a>
            <a href="#testimonials" className="neutral-950 hover:text-primary/80 px-3 py-2 rounded-md text-xl font-medium">Video</a>
            <a href="#testimonials" className="neutral-950 hover:text-primary/80 px-3 py-2 rounded-md text-xl font-medium flex items-center gap-2">
              Khoá học
              <ChevronDown />
            </a>
            <a href="#testimonials" className="neutral-950 hover:text-primary/80 px-3 py-2 rounded-md text-xl font-medium flex items-center gap-2">
              Thi thử
              <ChevronDown />

            </a>

          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/login" className="border border-neutral-100 text-neutral-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
                Đăng nhập
              </Link>
              <Link href="/signup" className="bg-primary text-neutral-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/80">
                Đăng ký
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
