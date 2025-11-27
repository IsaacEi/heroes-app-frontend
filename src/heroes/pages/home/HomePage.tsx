import { Heart} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/customs/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { CustomPagination } from "@/components/customs/CustomPagination"
import { CustomBreadcrumbs } from "@/components/customs/CustomBreadcrumbs"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { useHome } from "@/heroes/hooks/useHome"
import { use } from "react"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"

const HomePage = () => {
  const { activeTab: selectedTab, page, limit, category, setSearchParams } = useHome();
  const { data: heroesResponse } = usePaginatedHero({ page: +page, limit: +limit, category });
  const { data: summary } = useHeroSummary();
  const { favoriteCount, favorites } = use(FavoriteHeroContext);
  
  return (
    <>
      {/* Header */}
      <CustomJumbotron 
        title="Superhero Universe" 
        description="Discover, explore, and manage your favorite superheroes and villains" 
      />
      {/* Breadcrumbs */}
      <CustomBreadcrumbs currentPage="Inicio" />
      {/* Stats Dashboard */}
      <HeroStats />
      {/* Tabs */}
      <Tabs value={selectedTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all" onClick={()=> 
            setSearchParams((prev) => { 
              prev.set('tab', 'all'); 
              prev.set('category', 'all');
              prev.set('page', '1');
              return prev 
            }
          )}>All Characters ({summary?.totalHeroes ?? 0})</TabsTrigger>
          <TabsTrigger 
            value="favorites" 
            className="flex items-center gap-2" 
            onClick={()=> 
              setSearchParams((prev) => { 
                prev.set('tab', 'favorites'); 
                return prev 
              })
            }
          >
            <Heart className="h-4 w-4" />
            Favorites ({favoriteCount})
          </TabsTrigger>
          <TabsTrigger
            value="heroes" 
            onClick={()=> 
              setSearchParams((prev) => { 
                prev.set('tab', 'heroes'); 
                prev.set('category', 'hero');
                prev.set('page', '1');  
                return prev 
              })}
          >
            Heroes ({summary?.heroCount ?? 0})
          </TabsTrigger>
          <TabsTrigger 
            value="villains" 
            onClick={()=> 
              setSearchParams((prev) => { 
                prev.set('tab', 'villains'); 
                prev.set('category', 'villain');
                return prev 
              })}
          >
            Villains ({summary?.villainCount ?? 0})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" >
          {/* Character Grid */}
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="favorites">
          <HeroGrid heroes={favorites} />
        </TabsContent>
        <TabsContent value="heroes">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="villains">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
      </Tabs>

      {/* Pagination */}
      {
        selectedTab !== 'favorites' && (
          <CustomPagination totalPages={heroesResponse?.pages ?? 0} />
        )
      }
    </>
  )
}

export default HomePage
