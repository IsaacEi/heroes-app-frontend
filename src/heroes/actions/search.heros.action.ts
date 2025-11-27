import { HeroPageApi } from "../api/hero.api";
import type { HeroesResponse } from "../interfaces/get-heroes.interface";
import type { HeroResponse, SearchOptions } from "../interfaces/serach-heros.interface";

const apiUrl = import.meta.env.VITE_API_URL;
// Valores que NO deben considerarse válidos
const INVALID_VALUES = ["", "none", null, undefined];

export const searchHeros = async (
  options: SearchOptions = {}
): Promise<HeroesResponse> => {

  // Limpieza genérica para cualquier parámetro
  const params = Object.fromEntries(
    Object.entries(options).filter(([_, v]) => {
      if (INVALID_VALUES.includes(v as any)) return false;
      if (typeof v === "string" && v.trim() === "") return false;
      if (typeof v === "number" && v === 0) return false;
      return true;
    })
  );

  // Si no queda ningún filtro válido → no buscar
  if (Object.keys(params).length === 0) {
    return { total: 0, pages: 0, heroes: [] };
  }

  const { data } = await HeroPageApi.get<HeroResponse[]>("/api/heroes/search", {
    params,
  });

  const heroes = data.map((hero) => ({
    ...hero,
    image: `${apiUrl}/images/${hero.image}`,
  }));

  return { total: heroes.length, pages: 1, heroes };
};