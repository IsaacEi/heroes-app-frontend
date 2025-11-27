import { FilterSelect } from '@/components/customs/FilterSelect';
import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider';
import { useSearch } from '@/heroes/hooks/useSearch';
import { type FC } from 'react'
import dataTeam from "@/heroes/data/team-options.json";
import dataCategory from "@/heroes/data/category-options.json";
import dataUniverse from "@/heroes/data/universe-options.json";
import dataStatus from "@/heroes/data/status-options.json";


export const SearchAdvancedFilters: FC = () => {
    const { 
        team, category, universe, status,strength, activeAccordion, 
        TEAM, CATEGORY, UNIVERSE, STATUS, ADVANCED_FILTERS, STRENGTH, 
        setQueryParam, setManyQueryParams
    } = useSearch();

    const handleStrengthChange = (value: number[]) => {
        setQueryParam(STRENGTH, value[0].toString());
    }

    const handleTeamChange = (value: string) => {
        setQueryParam(TEAM, value);
    }

    const handleCategoryChange = (value: string) => {
        setQueryParam(CATEGORY, value);
    }

    const handleUniverseChange = (value: string) => {
        setQueryParam(UNIVERSE, value);
    }

    const handleStatusChange = (value: string) => {
        setQueryParam(STATUS, value);
    }

    const handleClearAll = () => {
        setManyQueryParams({
            [TEAM]: "none",
            [CATEGORY]: "none",
            [UNIVERSE]: "none",
            [STATUS]: "none",
            [STRENGTH]: "none",
        });
    }

    return (
        <Accordion type="single" collapsible value={activeAccordion}>
            <AccordionItem value={ADVANCED_FILTERS}>
                <AccordionContent>
                    <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Advanced Filters</h3>
                            <Button variant="ghost" onClick={handleClearAll}>Clear All</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <FilterSelect
                                label="Team"
                                value={team}
                                onChange={handleTeamChange}
                                options={dataTeam}
                            />

                            <FilterSelect
                                label="Category"
                                value={category}
                                onChange={handleCategoryChange}
                                options={dataCategory}
                            />

                            <FilterSelect
                                label="Universe"
                                value={universe}
                                onChange={handleUniverseChange}
                                options={dataUniverse}
                            />

                            <FilterSelect
                                label="Status"
                                value={status}
                                onChange={handleStatusChange}
                                options={dataStatus}
                            />
                        </div>
                        <div className="mt-4">
                            <label className="text-sm font-medium">Minimum Strength: {strength}/10</label>
                            <Slider
                                value={[strength]}
                                onValueChange={handleStrengthChange}
                                max={10} 
                                step={1} 
                                className="mt-2"
                            />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
