import { useSearchParams } from "react-router";

export const useSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const ACTIVE_ACCORDION = 'active-accordion';
    const ADVANCED_FILTERS = 'advanced-filters';
    const NAME = 'name';
    const TEAM = 'team';
    const CATEGORY = 'category';
    const UNIVERSE = 'universe';
    const STATUS = 'status';
    const STRENGTH = 'strength';

    const name = searchParams.get(NAME) ?? '';
    const team = searchParams.get(TEAM) ?? 'none';
    const category = searchParams.get(CATEGORY) ?? 'none';
    const universe = searchParams.get(UNIVERSE) ?? 'none';
    const status = searchParams.get(STATUS) ?? 'none';
    const strength = Number(searchParams.get(STRENGTH)) ?? 0;
    const activeAccordion = searchParams.get(ACTIVE_ACCORDION) ?? '';

    const setQueryParam = (name: string, value: string) => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.set(name, value);
            return newParams;
        });
    };

    const deleteQueryParam = (name: string) => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);
            newParams.delete(name);
            return newParams;
        });
    };

    const clearAllQueryParams = () => {
        setSearchParams(new URLSearchParams());
    };

    const setManyQueryParams = (updates: Record<string, string>) => {
        setSearchParams(prev => {
            const newParams = new URLSearchParams(prev);

            Object.entries(updates).forEach(([key, value]) => {
                if (value === "none") newParams.delete(key);
                else newParams.set(key, value);
            });

            return newParams;
        });
    };
    
    return {
        ACTIVE_ACCORDION,
        ADVANCED_FILTERS,
        NAME,
        TEAM,
        CATEGORY,
        UNIVERSE,
        STATUS,
        STRENGTH,
        name,
        team,
        category,
        universe,
        status,
        strength,
        activeAccordion,
        setQueryParam,
        deleteQueryParam,
        clearAllQueryParams,
        setManyQueryParams,
    };
}
