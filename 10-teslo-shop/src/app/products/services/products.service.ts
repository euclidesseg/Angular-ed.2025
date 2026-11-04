import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Pipe } from '@angular/core';
import { Product, ProductResponse } from '@products/interfaces/product.interface';
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

        // Define valores predeterminados para limit, offset y gender si no se proporcionan en options
        const {limit=9, offset=0, gender = ''} = options || {}; 

        return this.http.get<ProductResponse>(`${baseUrl}/products`,{ params:{limit, offset, gender} } )
        // .pipe permite encadenar operadores de transformación y efectos secundarios a un Observable. En este caso, se utiliza para registrar la respuesta en la consola.
        .pipe(
            // tap es un operador de RxJS que permite realizar efectos secundarios sin modificar los datos que fluyen a través del Observable.
            tap((response) => console.log(response))
            
        );
    }

    getProductByIdSlug(idSlug: string): Observable<Product> {
        return this.http.get<Product>(`${baseUrl}/products/${idSlug}`)
        .pipe(
            tap((prod) => console.log(prod))
        )
    }
    
}

// Existen otros operadores rxjs que se pueden utilizar para transformar filtrar o comibinar los datos que fluyen a través de un Observable.
// Ejemplos
// map: transforma los datos emitidos por un Observable aplicando una función a cada valor.
// filter: filtra los valores emitidos por un Observable según una condición.
// skip: omite un número específico de valores emitidos por un Observable antes de emitir los valores restantes.
// distinct: emite solo valores distintos de un Observable, evitando duplicados.
// first: emite solo el primer valor emitido por un Observable y luego completa.
// last: emite solo el último valor emitido por un Observable antes de completarse.
// mergeMap, switchMap, concatMap: combinan múltiples Observables en uno solo, manejando la emisión de valores de manera diferente.
// catchError: captura errores en un Observable y permite manejarlo de manera personalizada.
