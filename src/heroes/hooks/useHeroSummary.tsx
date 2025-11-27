import { getSummary } from '../actions/get-summary.action'
import { useQuery } from '@tanstack/react-query'

export const useHeroSummary = () => {
    return useQuery({
        queryKey: ['summary-stats'],
        queryFn: getSummary,
        staleTime: 1000 * 60 * 5, // 5 minutes
    })
}
