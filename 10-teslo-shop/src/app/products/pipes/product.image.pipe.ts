import { Pipe, PipeTransform } from '@angular/core';
import {environment} from '@environments/environment';
const baseUrl = environment.baseUrl;

@Pipe({
    name: 'productImage'
})

export class ProductImagePipe implements PipeTransform {

    transform(value: string | string[], ...args: any[]): any { // value es el valor que se pasa al pape ejemplo {{ product.images | productImage } value = product.images
        // retorna el valor numero 1 del arreglo y si no existe retorna el valor por defecto

        if (typeof value === 'string') {
            return `${baseUrl}/files/product/${value}`;
        }
        const image = value.at(0);

        if (!image) {
            return '/assets/images/no-image.jpg';
        }
        return `${baseUrl}/files/product/${image}`;
    }
}