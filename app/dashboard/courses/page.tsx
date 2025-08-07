import Link from "next/link";

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-500 mr-4">
                ← Quay lại Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">Khóa học của tôi</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Course Card 1 - In Progress */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 relative">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Đang học
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lập trình Web Fullstack</h3>
              <p className="text-gray-600 mb-4">Học HTML, CSS, JavaScript, React và Node.js từ cơ bản đến nâng cao</p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Tiến độ</span>
                  <span>65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>13/20 bài học</span>
                <span>2.5h còn lại</span>
              </div>

              <Link href="/dashboard/courses/web-fullstack" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md text-center block hover:bg-indigo-700 transition-colors">
                Tiếp tục học
              </Link>
            </div>
          </div>

          {/* Course Card 2 - In Progress */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-green-400 to-blue-500 relative">
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Đang học
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Science & AI</h3>
              <p className="text-gray-600 mb-4">Python, Machine Learning, Deep Learning và ứng dụng thực tế</p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Tiến độ</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>5/20 bài học</span>
                <span>15h còn lại</span>
              </div>

              <Link href="/dashboard/courses/data-science" className="w-full bg-green-600 text-white py-2 px-4 rounded-md text-center block hover:bg-green-700 transition-colors">
                Tiếp tục học
              </Link>
            </div>
          </div>

          {/* Course Card 3 - Completed */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-pink-400 to-red-500 relative">
              <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Hoàn thành
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Marketing</h3>
              <p className="text-gray-600 mb-4">SEO, Social Media Marketing, Content Marketing và Analytics</p>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Tiến độ</span>
                  <span>100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>20/20 bài học</span>
                <span className="text-green-600 font-medium">Điểm: 9.2/10</span>
              </div>

              <div className="flex space-x-2">
                <Link href="/dashboard/courses/digital-marketing" className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md text-center block hover:bg-gray-700 transition-colors">
                  Xem lại
                </Link>
                <Link href="/dashboard/certificates" className="flex-1 bg-green-600 text-white py-2 px-4 rounded-md text-center block hover:bg-green-700 transition-colors">
                  Chứng chỉ
                </Link>
              </div>
            </div>
          </div>

          {/* Course Card 4 - Not Started */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 relative">
              <div className="absolute top-4 right-4 bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                Chưa bắt đầu
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">UI/UX Design</h3>
              <p className="text-gray-600 mb-4">Thiết kế giao diện người dùng và trải nghiệm người dùng</p>
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>0/15 bài học</span>
                <span>12h tổng cộng</span>
              </div>

              <Link href="/dashboard/courses/ui-ux-design" className="w-full bg-orange-600 text-white py-2 px-4 rounded-md text-center block hover:bg-orange-700 transition-colors">
                Bắt đầu học
              </Link>
            </div>
          </div>
        </div>

        {/* Recommended Courses */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Khóa học đề xuất</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App Development</h3>
                <p className="text-gray-600 mb-4">React Native, Flutter và phát triển ứng dụng di động</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1.800.000đ</span>
                  <span className="text-sm text-gray-500">4.7 ⭐ (892 đánh giá)</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Thêm vào danh sách
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-teal-400 to-cyan-500"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Computing</h3>
                <p className="text-gray-600 mb-4">AWS, Azure, Google Cloud và DevOps</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2.200.000đ</span>
                  <span className="text-sm text-gray-500">4.8 ⭐ (567 đánh giá)</span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                  Thêm vào danh sách
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
