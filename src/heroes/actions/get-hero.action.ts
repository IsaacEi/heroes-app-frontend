import { HeroPageApi } from '../api/hero.api';
import type { HeroResponse } from '../interfaces/get-hero.interface';

export const getHero = async (idSlug: string): Promise<HeroResponse> => {
    const { data } = await HeroPageApi.get<HeroResponse>(`/api/heroes/${idSlug}`);
    const apiUrl = import.meta.env.VITE_API_URL;
    data.image = `${apiUrl}/images/${data.image}`;
    console.log('data', data);
    
    return data;
};