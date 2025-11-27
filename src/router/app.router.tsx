import { /* createBrowserRouter,  */createHashRouter } from "react-router";
import { HeroPage } from "@/heroes/pages/hero/HeroPage";
import { SearchPage } from "@/heroes/pages/search/SearchPage";
import { AdminPage } from "@/admin/pages/AdminPage";
import HomePage from "@/heroes/pages/home/HomePage";
import { HeroesLayout } from "@/heroes/layouts/HeroesLayout";
import { AdminLayout } from "@/admin/layouts/AdminLayout";
import { NotFoundPage } from "@/shared/pages/NotFoundPage";

/* export const appRouter = createBrowserRouter([ */
export const appRouter = createHashRouter([
    { 
        path: "/",
        element: <HeroesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "heroes/:slug",
                element: <HeroPage />,
            },
            {
                path: "search",
                element: <SearchPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <AdminPage />,
            },
        ],
    },
]);