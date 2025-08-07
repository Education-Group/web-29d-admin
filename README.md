# EduLearn - Nền tảng học trực tuyến

Một ứng dụng web học trực tuyến hiện đại được xây dựng với Next.js 14, TypeScript và Tailwind CSS.

## 🚀 Tính năng

### Trang công khai (Public)
- **Landing Page**: Trang chủ giới thiệu với các section:
  - Hero section với call-to-action
  - Tính năng nổi bật
  - Khóa học nổi bật
  - Đánh giá từ học viên
  - Footer với thông tin liên hệ

### Khu vực riêng tư (Private - Dashboard)
- **Dashboard chính**: Tổng quan về tiến độ học tập
- **Quản lý khóa học**: Xem và tiếp tục các khóa học
- **Hồ sơ cá nhân**: Cập nhật thông tin và cài đặt
- **Tiến độ học tập**: Theo dõi thành tích
- **Chứng chỉ**: Xem và tải chứng chỉ đã hoàn thành

## 📁 Cấu trúc dự án

```
e-learning/
├── app/
│   ├── components/          # Components chung
│   │   └── Header.tsx      # Component header tái sử dụng
│   ├── dashboard/          # Khu vực riêng tư
│   │   ├── page.tsx        # Dashboard chính
│   │   ├── courses/        # Quản lý khóa học
│   │   │   └── page.tsx
│   │   ├── profile/        # Hồ sơ cá nhân
│   │   │   └── page.tsx
│   │   ├── progress/       # Tiến độ học tập (sẽ tạo)
│   │   └── certificates/   # Chứng chỉ (sẽ tạo)
│   ├── globals.css         # CSS toàn cục
│   ├── layout.tsx          # Layout chính
│   └── page.tsx            # Landing page (public)
├── public/                 # Tài nguyên tĩnh
├── package.json
└── README.md
```

## 🛠️ Công nghệ sử dụng

- **Next.js 14**: Framework React với App Router
- **TypeScript**: Ngôn ngữ lập trình type-safe
- **Tailwind CSS**: Framework CSS utility-first
- **React**: Thư viện UI

## 🚀 Cách chạy dự án

1. **Cài đặt dependencies**:
   ```bash
   npm install
   ```

2. **Chạy development server**:
   ```bash
   npm run dev
   ```

3. **Mở trình duyệt**:
   ```
   http://localhost:3000
   ```

## 📱 Responsive Design

Ứng dụng được thiết kế responsive và hoạt động tốt trên:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎨 Design System

### Màu sắc chính
- **Primary**: Indigo (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Error**: Red (#ef4444)

### Typography
- **Heading**: Font-bold với các kích thước khác nhau
- **Body**: Font-normal cho nội dung chính
- **Caption**: Font-medium cho text nhỏ

## 🔒 Bảo mật

- Tất cả trang trong `/dashboard` sẽ cần authentication
- Sử dụng Next.js middleware để bảo vệ routes
- Form validation và sanitization

## 📈 Roadmap

### Phase 1 (Hiện tại)
- [x] Landing page
- [x] Dashboard cơ bản
- [x] Quản lý khóa học
- [x] Hồ sơ cá nhân

### Phase 2 (Tiếp theo)
- [ ] Authentication system
- [ ] Video player
- [ ] Quiz và bài tập
- [ ] Payment integration
- [ ] Admin panel

### Phase 3 (Tương lai)
- [ ] Mobile app
- [ ] AI-powered recommendations
- [ ] Live streaming
- [ ] Social features

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem file `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- Email: contact@edulearn.com
- Website: https://edulearn.com
- GitHub: https://github.com/edulearn
"# web-29d-admin" 
