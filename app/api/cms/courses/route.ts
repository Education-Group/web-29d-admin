import { NextRequest, NextResponse } from "next/server";

export interface CourseResponse {
    data: Course[],
    total: number,
    page: number,
    limit: number,
    totalPages: number,
}
export interface Course {
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
export async function GET(request: NextRequest) {
    const apiCmsBaseUrl = process.env.NEXT_PUBLIC_API_CMS_BASE_URL

    const { searchParams } = new URL(request.url)
    // const courseId = searchParams.get('courseId')
    const course = await fetch(`${apiCmsBaseUrl}/courses`)
    const data: CourseResponse = await course.json()
    console.log('data`', data)  
    return NextResponse.json(data)
}