import { Component, inject, linkedSignal, Query, resource, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchComponent } from "../../components/search-component/search.component";
import { TableComponent } from '../../components/table-component/table.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';

@Component({
  imports: [SearchComponent, TableComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {

  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query')?? '';
  
  query = linkedSignal(() => this.queryParam);

  // `resource` se usa para manejar datos asíncronos de forma reactiva
  // Combina estado, carga y actualización automática en una sola abstracción
  countryResource = resource<Country[], {query:string}>({ // Country[] tipo de dato que retorna {query:string} tipo de parametro que recibe
     // `params` define las dependencias reactivas del recurso
    // Cuando `query()` cambia, el resource se vuelve a ejecutar
    params: () => ({query: this.query()}),
    // `loader` es la función que obtiene los datos
    // Se ejecuta automáticamente cada vez que cambian los params
    loader: async ({params}) => {
        // Evita hacer la petición si el query está vacío Esto previene llamadas innecesarias al backend
      if(!params.query)return [];
      this.router.navigate(['/country/by-country'],{
        queryParams:{
          query:params.query
        }
      })
      return firstValueFrom(
        this.countryService.searchByCountry(params.query)
      )
    }
  })

}
