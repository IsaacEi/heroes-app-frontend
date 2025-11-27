import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useSearch } from '@/heroes/hooks/useSearch'
import { CircleX, Search } from 'lucide-react'
import { useRef, type FC } from 'react'

export const SearchInput:FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { name, NAME, setQueryParam, deleteQueryParam } = useSearch();
    
    const handleSearchKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const query = inputRef.current?.value ?? '';
            setQueryParam(NAME, query || '');
        }
    }

    const handleClearName = () => {
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        deleteQueryParam(NAME);
    }
    return (
        <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
                placeholder="Search heroes, villains, powers, teams..." 
                className="pl-12 h-12 text-lg bg-white" 
                ref={inputRef}
                onKeyDown={handleSearchKeyDown}
                defaultValue={name}
            />
            <Button 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" 
                variant="ghost" 
                onClick={handleClearName}
            >
                <CircleX className="h-4 w-4" />
            </Button>
        </div>
    )
}
