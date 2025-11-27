import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../interfaces/hero.interface";

interface FavoriteHeroContextProps {
    // State
    favorites: Hero[];
    favoriteCount: number;
    // Methods
    isFavoriteHero: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}
export const FavoriteHeroContext = createContext<FavoriteHeroContextProps>({} as FavoriteHeroContextProps);

const getfavoriteHeroesFromStorage = (): Hero[] => {
    const storedFavorites = localStorage.getItem('favoriteHeroes');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
}

export const FavoriteHeroContextProvider = ({ children }: PropsWithChildren) => {
    const [favorites, setFavorites] = useState<Hero[]>(getfavoriteHeroesFromStorage());
    const favoriteCount = favorites.length;

    const isFavoriteHero = (hero: Hero): boolean => {
        return favorites.some(fav => fav.id === hero.id);
    }

    const toggleFavorite = (hero: Hero): void => {
        if (isFavoriteHero(hero)) {
            setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== hero.id));
        } else {
            setFavorites(prevFavorites => [...prevFavorites, hero]);
        }
    }

    useEffect(() => {
        localStorage.setItem('favoriteHeroes', JSON.stringify(favorites));
    }, [favorites]);

    return (
        <FavoriteHeroContext 
            value={{
                favorites: favorites,
                favoriteCount: favoriteCount,
                isFavoriteHero: isFavoriteHero,
                toggleFavorite: toggleFavorite
            }}
        >
        {children}
        </FavoriteHeroContext>
  )
}
