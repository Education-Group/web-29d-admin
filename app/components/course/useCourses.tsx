import { useQuery } from "@tanstack/react-query"

export const useCourses = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['courses'],
        queryFn: () => fetch('/api/cms/courses').then(res => res.json())
    })
    return { data, isLoading, error }
}