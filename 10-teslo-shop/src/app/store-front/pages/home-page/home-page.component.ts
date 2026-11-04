import { Component, inject } from '@angular/core';
import {ProductCardComponent } from '@products/components/product-card-component/product-card.component';
import { ProductService } from '@products/services/products.service';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: "app-home-component",
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent { 

  private productService = inject(ProductService);

  private productResource = rxResource({
        // params() define los parámetros reactivos del recurso
        // si en el futuro se desea pasar parámetros a la llamada del servicio, se puede hacer desde aquí
        // si estos parámetros son señales cada vez que cambien, el recurso se volverá a cargar automáticamente
      params: () => ({}), 
        // stream es la función PRINCIPAL del rxResource
        // Debe devolver SIEMPRE un Observable<T>
        // Angular se suscribe y se desuscribe automáticamente
        // En este caso, se llama al método getProducts() del ProductService para obtener la lista de productos
      stream: () => this.productService.getProducts() 
  })
}
