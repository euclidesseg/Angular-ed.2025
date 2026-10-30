import { Component, inject, signal } from '@angular/core';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  imports: [],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activatedRoute = inject(ActivatedRoute);
   slug = signal<string>("");


  constructor() {
    // suscribirse a los cambios de los parametros de la ruta
    this.activatedRoute.queryParamMap.subscribe(params =>{
      
    })
  }

}
