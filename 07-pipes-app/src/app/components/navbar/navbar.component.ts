import { Component } from "@angular/core";
import {routes} from '../../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    templateUrl:'./navbar.component.html',
    selector:'app-navbar',
    styles:``,
    imports: [RouterLink, RouterLinkActive]
})

export class NavbarComponent{

    routes = routes.map(route => ({
        title: route.title ?? '',
        path: route.path ?? ''
    }))

}