'use client'
import React, { useState } from 'react'
import { useCourses } from './useCourses'
import Link from 'next/link'
import RightArrowIcon from '@/public/icons/RightArrowIcon'
import LeftArrowIcon from '@/public/icons/LeftArrowIcon'

// Define Course type based on the API response
interface Course {
    id: number
    title: string
    description: string
    type: 'online' | 'offline'
    level: string
    price: number
    originalPrice: number
    discountPercentage: number
    imageUrl: string
    thumbnailUrl: string
    isTrending: boolean
    isFeatured: boolean
    openingSchedules?: Array<{
        id: string
        openingDate: string
        status: string
        dayOfWeek: string
        timeFrame: string
        totalStudents: number
    }>
}

export default function Courses() {
    const { data, isLoading, error } = useCourses()
    const [activeFilter, setActiveFilter] = useState('all')
    
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (!data) return <div>No data</div>

    const courses: Course[] = data.data
    const trendingCourses = courses.filter((course: Course) => course.isTrending || course.isFeatured).slice(0, 2)
    const otherCourses = courses.filter((course: Course) => !course.isTrending && !course.isFeatured).slice(0, 3)
    
    const filteredCourses = activeFilter === 'all' 
        ? courses 
        : courses.filter((course: Course) => course.type === activeFilter)

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price)
    }

    const getDaysRemaining = (openingDate: string) => {
        const today = new Date()
        const opening = new Date(openingDate.split('/').reverse().join('-'))
        const diffTime = opening.getTime() - today.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        return diffDays > 0 ? diffDays : 0
    }

    return (
        <section id="courses" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Title */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                        Khóa học đang mở
                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex justify-center mb-12">
                    <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <button
                            onClick={() => setActiveFilter('all')}
                            className={`px-6 py-3 text-sm font-medium transition-colors ${
                                activeFilter === 'all' 
                                    ? 'bg-gray-100 text-gray-900' 
                                    : 'bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            Tất cả
                        </button>
                        <div className="w-px bg-gray-200"></div>
                        <button
                            onClick={() => setActiveFilter('online')}
                            className={`px-6 py-3 text-sm font-medium transition-colors ${
                                activeFilter === 'online' 
                                    ? 'bg-gray-100 text-gray-900' 
                                    : 'bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            Online
                        </button>
                        <div className="w-px bg-gray-200"></div>
                        <button
                            onClick={() => setActiveFilter('offline')}
                            className={`px-6 py-3 text-sm font-medium transition-colors ${
                                activeFilter === 'offline' 
                                    ? 'bg-gray-100 text-gray-900' 
                                    : 'bg-white text-gray-600 hover:bg-gray-50'
                            }`}
                        >
                            Offline
                        </button>
                    </div>
                </div>

                {/* Trending Courses Section */}
                {trendingCourses.length > 0 && (
                    <div className="mb-16">
                        <div className="flex justify-between items-center mb-8">
                            <h3 className="text-2xl font-bold text-gray-900">
                                Khóa học thịnh hành
                            </h3>
                            <Link href="/dashboard" className="flex items-center text-orange-500 hover:text-orange-600 text-sm font-medium">
                                Xem thêm
                                <RightArrowIcon className="w-4 h-4 ml-1" />
                            </Link>
                        </div>
                        
                        <div className="grid gap-8 lg:grid-cols-2">
                            {trendingCourses.map((course: Course) => (
                                <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                                    <div className="relative">
                                        <img 
                                            src={course.imageUrl || course.thumbnailUrl} 
                                            alt={course.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-0 left-0 m-4">
                                            <div className="bg-yellow-400 text-white px-3 py-2 rounded-lg">
                                                <div className="text-sm font-bold">Ưu đãi giảm tới {course.discountPercentage}%</div>
                                                <div className="text-xs">Đăng ký học với giá ưu đãi!!</div>
                                            </div>
                                        </div>
                                        <div className="absolute top-0 right-0 m-4">
                                            <div className="flex gap-2">
                                                <div className="bg-yellow-400 text-white px-2 py-1 rounded text-xs font-bold">
                                                    18 giờ
                                                </div>
                                                <div className="bg-yellow-400 text-white px-2 py-1 rounded text-xs font-bold">
                                                    40 phút
                                                </div>
                                                <div className="bg-yellow-400 text-white px-2 py-1 rounded text-xs font-bold">
                                                    32 giây
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h4 className="text-xl font-bold text-gray-900">{course.title}</h4>
                                                <p className="text-gray-600">{course.level}</p>
                                            </div>
                                            <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
                                                {course.discountPercentage}%
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2 mb-4">
                                            {course.openingSchedules && course.openingSchedules.length > 0 && (
                                                <>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">📅</span>
                                                        Lịch khai giảng: {course.openingSchedules[0].openingDate}
                                                    </div>
                                                    <div className="flex items-center text-sm text-gray-600">
                                                        <span className="mr-2">⏰</span>
                                                        Hạn đăng ký: {getDaysRemaining(course.openingSchedules[0].openingDate)} ngày còn lại
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        
                                        <div className="flex justify-between items-center mb-4">
                                            <div>
                                                <span className="text-gray-400 line-through text-sm">
                                                    {formatPrice(course.originalPrice)}
                                                </span>
                                                <div className="text-2xl font-bold text-gray-900">
                                                    {formatPrice(course.price)}
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                                            Xem chi tiết
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Other Courses Section */}
                <div className="mb-12">
                    <div className="grid gap-6 lg:grid-cols-3">
                        {otherCourses.map((course: Course) => (
                            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                                <div className="relative">
                                    <img 
                                        src={course.imageUrl || course.thumbnailUrl} 
                                        alt={course.title}
                                        className="w-full h-32 object-cover"
                                    />
                                    <div className="absolute top-2 right-2">
                                        <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                                            {course.type === 'online' ? 'Online' : 'Offline'}
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="p-4">
                                    <h4 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h4>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                        {course.description.replace(/[#*`]/g, '').substring(0, 100)}...
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-bold text-orange-500">
                                            {formatPrice(course.price)}
                                        </span>
                                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-300 transition-colors">
                                            Xem chi tiết +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* View More Button */}
                <div className="text-center">
                    <button className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                        Xem thêm
                        <LeftArrowIcon className="w-4 h-4 ml-2 rotate-90" />
                    </button>
                </div>
            </div>
        </section>
    )
}