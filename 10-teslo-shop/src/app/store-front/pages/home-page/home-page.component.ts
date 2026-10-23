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
        params: () => ({}),
        stream: () => this.productService.getProducts()
  })
}
