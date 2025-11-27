import { Badge } from '@/components/ui/badge'
import { Filter } from 'lucide-react'
import { type FC } from 'react'

interface Props {
  totalHeroesSearch: number;
  totalHeroes: number;
}

export const SearchResultsFilters: FC<Props> = ({ totalHeroesSearch, totalHeroes }) => {
  return (
    <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
        <p className="text-gray-600">Showing {totalHeroesSearch} of {totalHeroes} characters</p>
        <Badge variant="secondary" className="flex items-center gap-1">
            <Filter className="h-3 w-3" />
                Filtered
        </Badge>
        </div>
    </div>
  )
}
