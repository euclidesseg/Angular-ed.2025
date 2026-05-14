import { Route, Routes } from '@angular/router';
import { BasicPage } from './pages/basic-page/basic-page.component';
import { DinamicPage } from './pages/dinamic-page/dinamic-page.component';
import { SwitchesPage } from './pages/switches-page/switches-page.component';

export const reactiveRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'basic',
                title: 'Basicos',
                component: BasicPage
            },
            {
                path: 'dinamic', 
                title: 'Dinamicos',
                component: DinamicPage
            },
            {
                path: 'switches', 
                title: 'Switches',
                component: SwitchesPage
            },
            {
                path: '**',
                redirectTo: 'basic'
            }

        ]
    }
] 
