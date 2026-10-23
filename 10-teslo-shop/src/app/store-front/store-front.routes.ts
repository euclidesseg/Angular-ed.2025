import { Routes } from '@angular/router';
import { StoreFrontLayoutComponent } from './layouts/store-front-layout/store-front-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { GenderPageComponent } from './pages/gender-page/gender-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
export const storeFrontRoutes: Routes = [
    {
        path: '',
        component: StoreFrontLayoutComponent,
        children: [
            // de est a manera se cargan las rutas de manera perezosa porque en routes  loadChildren: () => import('./store-front/store-front.routes'), lo tenemos de manera perezosa
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'gender/:gender',
                component: GenderPageComponent
            },
            {
                path: 'product/:idSlug',
                component: ProductPageComponent
            },
            {
                path: '**',
                component: NotFoundPageComponent

            }
        ]
    },
    {
        path: '**',
        redirectTo: ''
    }
]
export default storeFrontRoutes;