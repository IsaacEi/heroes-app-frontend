import { useQuery } from "@tanstack/react-query";
import { getHeroesByPage } from '@/heroes/actions/get-heroes-by-page.action';
interface Props {
    page: number;
    limit?: number;
    category?: string;
}

export const usePaginatedHero = ({ page, limit, category = 'all' }: Props) => {
  return useQuery({
    queryKey: ['heroesByPage', { page, limit, category }],
    queryFn: () => getHeroesByPage(page, limit, category),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
