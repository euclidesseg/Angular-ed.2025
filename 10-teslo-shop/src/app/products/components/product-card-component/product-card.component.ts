import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@products/interfaces/product.interface';
import {environment} from '@environments/environment';
import { SlicePipe } from '@angular/common';

@Component({
  standalone:true,
  selector: 'product-card',
  imports: [RouterLink, SlicePipe],
  templateUrl: './product-card.component.html',
})
export  class ProductCardComponent {
  baseUrl = environment.baseUrl;
  product = input.required<Product>()
}
