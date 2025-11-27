import { RouterProvider } from "react-router"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { appRouter } from "./router/app.router"
import { FavoriteHeroContextProvider } from './heroes/context/FavoriteHeroContext';

export const App = () => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteHeroContextProvider>
        <RouterProvider router={appRouter} />
        <ReactQueryDevtools initialIsOpen={false} />
      </FavoriteHeroContextProvider>
    </QueryClientProvider>
  )
}
