import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import {ActivatedRoute} from '@angular/router';
import { ProductService } from '@products/services/products.service';
import { ProductCarrouselComponent } from '@products/components/product-carrousel/product-carrousel.component';

@Component({
  imports: [ProductCarrouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  activatedRoute = inject(ActivatedRoute);
  productService = inject(ProductService);
  slug = signal<string>("");
  
   // Obtiene el valor del parámetro 'idSlug' de la ruta actual
  productIdSlug = signal<string>(this.activatedRoute.snapshot.params['idSlug']); 

  productResource = rxResource({
      // params() define los parámetros reactivos del recurso
      // si en el futuro se desea pasar parámetros a la llamada del servicio, se puede hacer desde aquí
      // si estos parámetros son señales cada vez que cambien, el recurso se volverá a cargar automáticamente
    params:() => this.productIdSlug,
      // stream es la función PRINCIPAL del rxResource
      // Debe devolver SIEMPRE un Observable<T>
      // Angular se suscribe y se desuscribe automáticamente
    stream:({params}) => this.productService.getProductByIdSlug(params())

  })
}

// exResource hereda las siguientes propiedades desde Resource<T>:
// 1. value: T | null => El valor del recurso, que puede ser nulo si aún no se ha cargado o si hubo un error
// 2. status: any => El estado del recurso, que puede ser un error si es que ocurrió alguno
// 3. error: boolean => Indica si ocurrió un error durante la carga del recurso
// 4. isLoading: boolean => Indica si el recurso se encuentra en proceso de carga
// 5. snapshot: boolean => Indica si se ha tomado una instantánea del estado del recurso
// y contiene algunas prodpiedades adicionales.

// 6. hasValue: boolean => Indica si el recurso tiene un valor cargado
// 7. hasError: boolean => Indica si el recurso tiene un error cargado
