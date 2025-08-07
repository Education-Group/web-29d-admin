import Image from "next/image";
import Link from "next/link";
import LOGO from "@/public/icons/logo_29d.png";
import ArrowDown from "@/public/ArrowDown";
import HeroPng from "@/public/imgs/img_1_hero.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 px-6">
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
                <Link href="/dashboard" className="bg-primary text-neutral-950 px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/80">
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
            <h1 className="text-4xl tracking-tight font-extrabold text-neutral-900 sm:text-5xl md:text-6xl text-left">
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
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
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
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
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
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Học viên nói gì về chúng tôi
            </h2>
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
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Sẵn sàng bắt đầu hành trình học tập?
          </h2>
          <p className="mt-4 text-xl text-indigo-100">
            Tham gia cùng hơn 10,000 học viên đã thành công
          </p>
          <div className="mt-8">
            <Link href="/dashboard" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
              Đăng ký ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">EduLearn</h3>
              <p className="text-gray-400">
                Nền tảng học trực tuyến hàng đầu Việt Nam
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Khóa học</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Lập trình</a></li>
                <li><a href="#" className="hover:text-white">Marketing</a></li>
                <li><a href="#" className="hover:text-white">Design</a></li>
                <li><a href="#" className="hover:text-white">Business</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Trung tâm trợ giúp</a></li>
                <li><a href="#" className="hover:text-white">Liên hệ</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Theo dõi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">YouTube</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 EduLearn. Tất cả quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
