import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        // este irá asta las rutas hijas de reactive la cual tiene una primera ruta vacion e intentará cargar un children
        // entrara al comodin de bacio e irá entonces hasta el basic page
        path:'reactive',
        loadChildren: () => import ('./reactive/reactive.routes').then(r => r.reactiveRoutes)
    },
    {
        path:'auth',
        loadChildren: () => import ('./auth/auth.routes')
    },
    {
        path:'country',
        loadChildren: () => import ('./country/country.routes').then(r => r.countryRoutes)
    },
    {
        path: '**',
        redirectTo:'reactive'
    }

];
