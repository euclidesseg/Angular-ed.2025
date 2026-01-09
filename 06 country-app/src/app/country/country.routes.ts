import { Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital.component";
import { CountryLayoutComponent } from "./layouts/country-layout/country-layout.layout";

export const countryRoutes:Routes =[

    {
        path:'',
        component: CountryLayoutComponent,

        children:[
            {
                path:'by-capital',
                component:ByCapitalPageComponent,
            },
            {
                path: '**',
                redirectTo: 'by-capital'
            }

        ]
    },
   
   
]

export default countryRoutes