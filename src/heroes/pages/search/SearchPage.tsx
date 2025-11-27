import { CustomJumbotron } from '@/components/customs/CustomJumbotron'
import { HeroStats } from '@/heroes/components/HeroStats'
import { SearchControls } from './components/SearchControls'
import { CustomBreadcrumbs } from '@/components/customs/CustomBreadcrumbs'
import { useSearchHeros } from '@/heroes/hooks/useSearchHeros'
import { HeroGrid } from '@/heroes/components/HeroGrid'
import { useSearch } from '@/heroes/hooks/useSearch'

export const SearchPage = () => {
  const { name, team, category, universe, status, strength } = useSearch();
  const { data: heroesResponse } = useSearchHeros({ name, team, category, universe, status, strength: Number(strength) });
  return (
    <>
      {/* Header */}
      <CustomJumbotron title="Busqueda de heroes" description="Busca a tus superheroes y villanos favoritos" />
      {/* Breadcrumbs */}
      <CustomBreadcrumbs currentPage="Busqueda de heroes" breadcrumbs={[{ label: 'Inicio', to: '/' }]} />

      {/* Stats Dashboard */}
      <HeroStats />
      
      {/* Controls */}
      <SearchControls totalHeroesSearch={ heroesResponse?.total ?? 0} />
      
      {/* Hero List */}
      <HeroGrid heroes={heroesResponse?.heroes ?? []} />
    </>
  )
}
