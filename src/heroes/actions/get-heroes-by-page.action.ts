import { HeroPageApi } from '../api/hero.api';
import type { HeroesResponse } from '../interfaces/get-heroes.interface';
const apiUrl = import.meta.env.VITE_API_URL;
export const getHeroesByPage = async (
    page: number,
    limit: number = 10,
    category: string = 'all'
): Promise<HeroesResponse> => {
    if (isNaN(page)) {
        page = 1;
    }
    if (isNaN(limit)) {
        limit = 10;
    }
    const params = {
        limit,
        offset: (page - 1) * limit,
        category,
    }
    const { data } = await HeroPageApi.get<HeroesResponse>('/api/heroes', { params });

    const heroes = data.heroes.map(hero => ({
        ...hero,
        image: `${apiUrl}/images/${hero.image}`,
    }));
    
    return { ...data, heroes };
};