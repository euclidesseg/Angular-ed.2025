import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
        children: [
            {
                path: 'trending',
                loadComponent: () => import('./gifs/pages/trending-page/trending-page.component')
            },
            {
                path: 'search',
                loadComponent: () => import('./gifs/pages/search-page/search-page.component')
            },

            {
                path:'history/:query',
                loadComponent:() => import('./gifs/pages/gif-history/gif-history.page.component')
            },

            {
                path: '**', // cualquier ruta que nose las anteriores definidas irá hasta el la ruta dashboard
                redirectTo: 'trending'
            }
        ]
    },

    {
        path: '**', // cualquier ruta que nose las anteriores definidas irá hasta el la ruta dashboard
        redirectTo: 'dashboard'
    }
];
