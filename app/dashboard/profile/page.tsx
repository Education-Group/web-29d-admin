import Link from "next/link";

export default function Profile() {
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
              <h1 className="text-2xl font-bold text-gray-900">Hồ sơ cá nhân</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="text-center">
                  <div className="mx-auto h-32 w-32 rounded-full bg-indigo-100 flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-indigo-600">HV</span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">Học viên</h3>
                  <p className="text-sm text-gray-500">student@example.com</p>
                  <p className="text-sm text-gray-500">Thành viên từ tháng 1, 2024</p>
                </div>
                
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Tổng khóa học</dt>
                      <dd className="text-lg font-medium text-gray-900">8</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Khóa học hoàn thành</dt>
                      <dd className="text-lg font-medium text-gray-900">5</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Điểm trung bình</dt>
                      <dd className="text-lg font-medium text-gray-900">8.5/10</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-medium text-gray-500">Thời gian học</dt>
                      <dd className="text-lg font-medium text-gray-900">24 giờ</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">Thông tin cá nhân</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                        Họ và tên
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        defaultValue="Nguyễn Văn A"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue="student@example.com"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Số điện thoại
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        defaultValue="0123456789"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div>
                      <label htmlFor="date-of-birth" className="block text-sm font-medium text-gray-700">
                        Ngày sinh
                      </label>
                      <input
                        type="date"
                        name="date-of-birth"
                        id="date-of-birth"
                        defaultValue="1995-01-01"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                      Địa chỉ
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      defaultValue="123 Đường ABC, Quận 1, TP.HCM"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700">
                      Giới thiệu
                    </label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows={3}
                      defaultValue="Tôi là một học viên đam mê công nghệ và luôn muốn học hỏi những kiến thức mới."
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Lưu thay đổi
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white shadow rounded-lg mt-8">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">Bảo mật</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">Đổi mật khẩu</h4>
                    <p className="text-sm text-gray-500 mt-1">Cập nhật mật khẩu để bảo vệ tài khoản của bạn</p>
                    <button className="mt-3 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                      Đổi mật khẩu
                    </button>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-medium text-gray-900">Xác thực hai yếu tố</h4>
                    <p className="text-sm text-gray-500 mt-1">Thêm lớp bảo mật bổ sung cho tài khoản</p>
                    <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
                      Bật xác thực 2FA
                    </button>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-medium text-gray-900">Thông báo</h4>
                    <p className="text-sm text-gray-500 mt-1">Quản lý cài đặt thông báo</p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="email-notifications"
                          name="email-notifications"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="email-notifications" className="ml-2 block text-sm text-gray-900">
                          Thông báo qua email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-notifications"
                          name="push-notifications"
                          type="checkbox"
                          defaultChecked
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label htmlFor="push-notifications" className="ml-2 block text-sm text-gray-900">
                          Thông báo đẩy
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
