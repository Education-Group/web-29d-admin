import Image from "next/image";
import Link from "next/link";
import LOGO from "@/public/icons/logo_29d.png";
import ArrowDown from "@/public/icons/ArrowDown";
import HeroPng from "@/public/imgs/img_1_hero.png";
import InstagramIcon from "@/public/icons/InstagramIcon";
import TiktokIcon from "@/public/icons/TiktokIcon";
import FacebookIcon from "@/public/icons/FacebookIon";
import ThreadIcon from "@/public/icons/ThreadIcon";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      {/* Navigation */}
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
                <ArrowDown width={10} height={6} />
              </a>
              <a href="#testimonials" className="neutral-950 hover:text-primary/80 px-3 py-2 rounded-md text-xl font-medium flex items-center gap-2">
                Thi thử
                <ArrowDown width={10} height={6} />

              </a>

            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/dashboard" className="border border-neutral-100 text-neutral-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200">
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto py-4 md:py-20 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between gap-4">
        <div className="w-1/2">
          <div className="">
            <h1 className="text-4xl tracking-tight font-black text-neutral-900 sm:text-5xl md:text-6xl text-left font-darker">
              <span className="block">Hero section của</span>
              <span className="block">29diem.daihoc</span>
            </h1>
            <p className="mt-3 text-left text-lg text-neutral-500 sm:text-lg md:mt-5 md:text-xl ">
              Khám phá hàng nghìn khóa học chất lượng cao từ các chuyên gia hàng đầu.
              Nâng cao kỹ năng của bạn với nền tảng học trực tuyến hiện đại nhất.
            </p>
            <div className="mt-5 sm:flex md:mt-8 justify-around">
              <div className="rounded-md flex-1">
                <Link href="/dashboard" className="w-full flex items-center justify-center px-8 py-3 border border-neutral-100 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 md:py-4 md:text-lg md:px-20">
                  Xem khoá học
                </Link>
              </div>
              <div className="mt-3 rounded-md border border-neutral-100 sm:mt-0 sm:ml-3 flex-1">
                <a href="#courses" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#010206] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-20">
                  Đọc bài viết
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={HeroPng} alt="Hero" className="mx-auto w-full max-w-[500px]" />
        </div>

      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-gray-900 sm:text-6xl font-darker">
              Bài viết nổi bật
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Feature Card 1 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  {/* Illustration */}
                  <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg mb-4 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-indigo-600 font-medium">HEADLINE</div>
                  <h3 className="text-lg font-semibold text-gray-900">Bài viết nổi bật 1</h3>
                </div>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  {/* Illustration */}
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-200 rounded-lg mb-4 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-green-600 font-medium">HEADLINE</div>
                  <h3 className="text-lg font-semibold text-gray-900">Bài viết nổi bật 2</h3>
                </div>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  {/* Illustration */}
                  <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-pink-200 rounded-lg mb-4 flex items-center justify-center relative">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-purple-600 font-medium">HEADLINE</div>
                  <h3 className="text-lg font-semibold text-gray-900">Bài viết nổi bật 3</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-gray-900 sm:text-6xl font-darker">
              Khóa học đang mở
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Khám phá các khóa học được yêu thích nhất
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Course Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                <img className="h-full w-full object-cover" src="https://images.squarespace-cdn.com/content/v1/5acbdd3a25bf024c12f4c8b4/1591636644294-TK0UEU88NLWMB1XX1CPX/Linear+Algebra+Example.jpg" alt="" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Đại số</h3>
                <p className="mt-2 text-gray-600">Học Vector, Ma trận, Không gian vector, hệ phương trình tuyến tính,...</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">2.500.000đ</span>
                  <span className="text-sm text-gray-500">4.8 ⭐ (1.2k đánh giá)</span>
                </div>
              </div>
            </div>

            {/* Course Card 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500">
                <img className="h-full w-full object-cover" src="https://continuinged.utah.edu/_resources/images/_d1/anc/featured-images/math121.jpg" alt="" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Giải tích I</h3>
                <p className="mt-2 text-gray-600">Hàm số, giới hạn, đạo hàm, tích phân, hàm nhiều biến,...</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">3.200.000đ</span>
                  <span className="text-sm text-gray-500">4.9 ⭐ (856 đánh giá)</span>
                </div>
              </div>
            </div>

            {/* Course Card 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-pink-400 to-red-500">
                <img className="h-full w-full object-cover" src="https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/a5490d4c7f91.jpg" alt="" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">Giải tích II</h3>
                <p className="mt-2 text-gray-600">Chuỗi số, chuỗi hàm, chuỗi lũy thừa, chuỗi Fourier, phương trình vi phân,...</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">1.800.000đ</span>
                  <span className="text-sm text-gray-500">4.7 ⭐ (634 đánh giá)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/dashboard" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80">
              Xem tất cả khóa học
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-gray-900 sm:text-6xl font-darker">
              Vì sao bạn nên chọn chúng mình?
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">NT</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Nguyễn Thị Anh</h4>
                  <p className="text-gray-600">Sinh viên IT</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Khóa học lập trình web rất hay và dễ hiểu. Giảng viên giải thích rõ ràng và có nhiều bài tập thực hành."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">TL</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Trần Văn Long</h4>
                  <p className="text-gray-600">Freelancer</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Sau khi học xong khóa Digital Marketing, tôi đã có thể tự tin nhận các dự án marketing cho khách hàng."
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">PH</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Phạm Hoàng</h4>
                  <p className="text-gray-600">Data Analyst</p>
                </div>
              </div>
              <p className="text-gray-700">
                "Khóa học Data Science giúp tôi có được công việc mơ ước. Nội dung cập nhật và thực tế."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Section - Large Image Placeholder */}
            <div className="flex-1">
              <div className="w-full h-64 lg:h-80 bg-gray-200 rounded-2xl border border-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-lg">Image Placeholder</div>
              </div>
            </div>

            {/* Right Section - CTA Component */}
            <div className="flex-1 max-w-md">
              <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-8">
                {/* Small Image Placeholder */}
                <div className="w-full h-32 bg-gray-200 rounded-xl mb-6 flex items-center justify-center">
                  <div className="text-gray-500 text-sm">Banner Image</div>
                </div>

                {/* Text Content */}
                <div className="mb-6">
                  <p className="text-gray-700 text-left leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>
                </div>

                {/* Email Input and Button */}
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Email nhận tin tức"
                    className="flex-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="px-6 py-3 bg-primary text-neutral-950 font-medium rounded-lg hover:bg-primary/80 transition-colors">
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="font-inter text-black-footer font-medium">
        <div className=" mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8">
            {/* Top Section - Newsletter & Social Media */}
            <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
              {/* Left side - Logo & Social */}
              <div className="flex items-center gap-4 mb-4 lg:mb-0 flex-1">
                <div>
                  <Image src={LOGO} alt="logo" width={64} height={64} />                </div>
                <span className="text-black font-medium">Theo dõi chúng tớ</span>
                <div className="flex gap-3">
                  {/* Instagram */}
                  <InstagramIcon/>
                  {/* TikTok */}
                  <TiktokIcon/>
                  {/* Facebook */}
                  <FacebookIcon/>
                  {/* Generic Social */}
                  <ThreadIcon/>
                </div>
              </div>

              {/* Right side - Email Subscription */}
              <div className="flex gap-3 flex-1">
                <input
                  type="email"
                  placeholder="Email nhận tin tức"
                  className="px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent flex-1"
                />
                <button className="px-6 py-3 md:px-16 bg-primary text-neutral-950 font-medium rounded-lg hover:bg-primary/80 transition-colors">
                  Đăng ký
                </button>
              </div>
            </div>

            {/* Middle Section - Contact & Navigation */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 ">
              {/* Left Column - Contact Information */}
              <div>
                <div className="mb-4">
                  <h4 className="font-semibold text-black mb-2">Địa chỉ:</h4>
                  <p className="text-black">Phường Từ Sơn, Thành phố Bắc Ninh</p>
                  <p className="text-black">123 Tòa nhà AhBC Phường Cầu Giấy, Thành phố Hà Nội</p>
                </div>
                <div className="md:flex md:gap-16">
                  <div>
                    <h4 className="font-semibold text-black mb-2">Liên hệ:</h4>
                    <p className="text-black">0123 456 789</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-black mb-2">Email:</h4>
                    <p className="text-black">29diem.daihoc@gmail.com</p>
                  </div>
                </div>

              </div>

              {/* Right Column - Email & Navigation */}
              <div>
                <div className="flex justify-between gap-8">
                  <div>
                    <ul className="space-y-4">
                      <li><a href="#" className="text-black hover:text-gray-600">Blogs</a></li>
                      <li><a href="#" className="text-black hover:text-gray-600">Video</a></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="space-y-4">
                      <li><a href="#" className="text-black hover:text-gray-600">Khóa học</a></li>
                      <li><a href="#" className="text-black hover:text-gray-600">Thi thử</a></li>
                    </ul>

                  </div>
                  <div>
                    <ul className="space-y-4">
                      <li><a href="#" className="text-black hover:text-gray-600">Donate</a></li>
                      <li><a href="#" className="text-black hover:text-gray-600">Về chúng tôi</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section - Copyright & Legal */}
            <div className="pt-6 border-t border-gray-200">
              <div className="w-fit mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 font-inter">
                <div className="text-black mb-2 lg:mb-0">
                  Copyright 2025 © 29diemdaihoc
                </div>
                <a href="#" className="hover:text-gray-600">Điều khoản</a>
                <a href="#" className="hover:text-gray-600">Chính sách</a>
                <a href="#" className="hover:text-gray-600">Phương thức thanh toán</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
