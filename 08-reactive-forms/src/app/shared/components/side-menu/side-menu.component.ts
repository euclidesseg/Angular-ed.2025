import { Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";
import authRoutes from '../../../auth/auth.routes';



interface MenuItem{
  title:string;
  route:string;
}


const reactiveRoute = reactiveRoutes[0].children?? [];
const authRoute = authRoutes[0].children?? [];
@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
})
export class SideMenu {

  reactiveMenu:MenuItem[] = reactiveRoute.filter(f => f.path !== '**').map(r => ({
    title: r.title as string,
    route: `reactive/${r.path}`,
  }))

  authMenu:MenuItem[] = [{
    title: 'Registro',
    route: './auth'
  }]
  countryMenu:MenuItem[] = [{
    title: 'Países',
    route: './country'
  }]
}
