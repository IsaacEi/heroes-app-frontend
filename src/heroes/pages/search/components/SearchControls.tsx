import { type FC } from "react"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { SearchInput } from "./SearchInput"
import { SearchActionButtons } from "./SearchActionButtons"
import { SearchAdvancedFilters } from "./SearchAdvancedFilters"
import { SearchResultsFilters } from "./SearchResultsFilters"

interface Props {
  totalHeroesSearch: number;
}

export const SearchControls: FC<Props> = ({ totalHeroesSearch }) => {
    const { data: summary } = useHeroSummary();
    
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-4 mb-8">
                {/* Search */}
                <SearchInput />
                {/* Action buttons */}
                <SearchActionButtons />
            </div>

            {/* Advanced Filters */}
            <SearchAdvancedFilters />

            {/* Results info Filters */}
            <SearchResultsFilters 
                totalHeroesSearch={totalHeroesSearch} 
                totalHeroes={summary?.totalHeroes ?? 0} 
            />
        </>
    )
}
