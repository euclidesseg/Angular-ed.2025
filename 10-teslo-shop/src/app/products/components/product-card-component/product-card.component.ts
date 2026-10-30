import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@products/interfaces/product.interface';
import { SlicePipe } from '@angular/common';
import { ProductImagePipe } from '@products/pipes/product.image.pipe';

@Component({
  standalone:true,
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.component.html',
})
export  class ProductCardComponent {
  product = input.required<Product>()
}
