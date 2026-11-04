import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';

// import Swiper JS
import Swiper from 'swiper';
import {Pagination,  Navigation} from 'swiper/modules'

// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductImagePipe } from '@products/pipes/product.image.pipe';

@Component({
  selector: 'product-carrousel',
  imports: [ProductImagePipe],
  templateUrl: './product-carrousel.component.html',
  styles: `
    .swiper{
      width: 100%;
      height:500px;
      background-color: #f5f5f5;
    }
  `
})
export class ProductCarrouselComponent implements AfterViewInit {

  images = input.required<string[]>();

  swiperDiv = viewChild.required<ElementRef>('swiperDiv');

  // este siclo de vida permite manipular el DOM después de que la vista del componente ha sido inicializada.
  ngAfterViewInit(): void {
    console.table(this.images)
    // este nativeElement nos permite acceder al elemento HTML del Swiper y manipularlo.
    const element = this.swiperDiv().nativeElement;
    if (!element) return

    const swiper = new Swiper(element, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      modules: [
        Navigation, Pagination
      ],
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

  }
}


// Una referencia local como #swipperDiv nos permite acceder al elemento HTML del Swiper y manipularlo directamente desde el componente.
// una referencia local es una forma de obtener acceso a un elemento del DOM en Angular. 
// mediante viecwChild podemos obtener una referencia a ese elemento y manipularlo en el código del componente.