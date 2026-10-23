import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductResponse } from '@products/interfaces/product.interface';
import {Observable, tap} from  'rxjs'
import { environment } from '@environments/environment';

const baseUrl = environment.baseUrl;
interface ProductOptions { 
    limit?: number; // indica cuantos productos se quieren traer
    offset?: number; // indica a partir de que producto se quiere traer, para paginacion
    gender?: string; // indica el generero de los productos que se queiren traer.
}
@Injectable({providedIn: 'root'})
export class ProductService {
    

    
    private http = inject(HttpClient);

    getProducts(options?:ProductOptions):Observable<ProductResponse>{

        const {limit=9, offset=0, gender = ''} = options || {};

        return this.http.get<ProductResponse>(`${baseUrl}/products`,{ params:{limit, offset, gender} } ).pipe(
                tap((response) => console.log(response))
        );
    }
    
}