import { useQuery } from "@tanstack/react-query";
import type { SearchOptions } from "../interfaces/serach-heros.interface";
import { searchHeros } from '../actions/search.heros.action';


export const useSearchHeros = ({ name, team, category, universe, status, strength }: SearchOptions) => {
  return useQuery({
    queryKey: ['searchHeroByPage', { name, team, category, universe, status, strength }],
    queryFn: () => searchHeros({ name, team, category, universe, status, strength }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
