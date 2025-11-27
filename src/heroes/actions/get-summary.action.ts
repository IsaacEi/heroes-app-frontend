import { HeroPageApi } from '../api/hero.api';
import type { SummaryResponse } from '../interfaces/get-sumary.interface';

export const getSummary = async (): Promise<SummaryResponse> => {
    const { data } = await HeroPageApi.get<SummaryResponse>('/api/heroes/summary');
    return data;
};