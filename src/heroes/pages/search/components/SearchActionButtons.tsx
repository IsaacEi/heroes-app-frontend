import { Button } from '@/components/ui/button'
import { useSearch } from '@/heroes/hooks/useSearch';
import { Filter/* , SortAsc, Grid, Plus */ } from 'lucide-react'
import { type FC } from 'react'

export const SearchActionButtons: FC = () => {
    const { activeAccordion, ACTIVE_ACCORDION, ADVANCED_FILTERS, setQueryParam, deleteQueryParam } = useSearch();
    const handleAccordion = () => {
        if (activeAccordion === ADVANCED_FILTERS) {
            deleteQueryParam(ACTIVE_ACCORDION);
            return;
        }
        setQueryParam(ACTIVE_ACCORDION, ADVANCED_FILTERS);
    }

    return (
        <div className="flex gap-2">
            <Button 
                variant={activeAccordion === ADVANCED_FILTERS ? 'default' : 'outline'} 
                className="h-12" 
                onClick={handleAccordion}>
                <Filter className="h-4 w-4 mr-2" />
                Filters
            </Button>

            {/* <Button variant="outline" className="h-12">
                <SortAsc className="h-4 w-4 mr-2" />
                Sort by Name
            </Button>

            <Button variant="outline" className="h-12">
                <Grid className="h-4 w-4" />
            </Button>

            <Button className="h-12">
                <Plus className="h-4 w-4 mr-2" />
                Add Character
            </Button> */}
        </div>
    )
}
