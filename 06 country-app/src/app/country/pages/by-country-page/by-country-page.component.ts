import { Component, inject, Query, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop'
import { SearchComponent } from "../../components/search-component/search.component";
import { TableComponent } from '../../components/table-component/table.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { of } from 'rxjs';

@Component({
  imports: [SearchComponent, TableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  countryService = inject(CountryService);
  query = signal<string>('');


  // rxResource conecta el mundo de RxJS (Observables)
  // con el mundo de Signals (estado reactivo en Angular)

  countryRxResource = rxResource<Country[], {query:string}>({
    // params() define los parámetros reactivos del recurso
    // Cada vez que this.query() cambie, el recurso se vuelve a ejecutar automáticamente
    params: () => ({ query: this.query() }),

    // stream es la función PRINCIPAL del rxResource
    // Debe devolver SIEMPRE un Observable<T>
    // Angular se suscribe y se desuscribe automáticamente
    stream: ({ params }) => {
      if (!params.query) return of([]);// retorno un observable con un arreglo bacio Observable<Country[]>
      return this.countryService.searchByCountry(params.query)
      // angular maneja por si solo el error, se susbribe y se descuscribe, manea el loading etc
    }
  })
  // // `resource` se usa para manejar datos asíncronos de forma reactiva
  // // Combina estado, carga y actualización automática en una sola abstracción
  // countryResource = resource<Country[], {query:string}>({ // Country[] tipo de dato que retorna {query:string} tipo de parametro que recibe
  //    // `params` define las dependencias reactivas del recurso
  //   // Cuando `query()` cambia, el resource se vuelve a ejecutar
  //   params: () => ({query: this.query()}),
  //   // `loader` es la función que obtiene los datos
  //   // Se ejecuta automáticamente cada vez que cambian los params
  //   loader: async ({params}) => {
  //       // Evita hacer la petición si el query está vacío Esto previene llamadas innecesarias al backend
  //     if(!params.query)return [];

  //     return firstValueFrom(
  //       this.countryService.searchByCountry(params.query)
  //     )
  //   }
  // })

}
