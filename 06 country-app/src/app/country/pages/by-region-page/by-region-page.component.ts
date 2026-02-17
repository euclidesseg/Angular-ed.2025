import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { TableComponent } from '../../components/table-component/table.component';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Country } from '../../interfaces/country.interface';
import { of } from 'rxjs';

export type Region = | 'Africa'  | 'America'  | 'Asia'  | 'Europe'  | 'Oceania'  | 'Antarctic';
  
  
@Component({
  imports: [TableComponent],
  templateUrl: './by-region-page.component.html',
})
export class ByRegionPageComponent { 
  countryService = inject(CountryService)

  regionSelected = signal<Region>('Oceania');

  regions:Region[] =[
    'Africa',
    'America',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic'
  ] 

  searchByregionEffect = effect(() =>{
    this.countryService.searchByRegion(this.regionSelected())
  })

  // rxResource conecta el mundo de RxJS (Observables)
  // con el mundo de Signals (estado reactivo en Angular)

  regionRxResource = rxResource<Country[], {region:string}>({
    // params() define los parámetros reactivos del recurso
    // Cada vez que this.region() cambie, el recurso se vuelve a ejecutar automáticamente
    params: () => ({ region: this.regionSelected() }),

    // stream es la función PRINCIPAL del rxResource
    // Debe devolver SIEMPRE un Observable<T>
    // Angular se suscribe y se desuscribe automáticamente
    stream: ({ params }) => {
      if (!params.region) return of([]);// retorno un observable con un arreglo bacio Observable<Country[]>
      return this.countryService.searchByRegion(params.region)
      // angular maneja por si solo el error, se susbribe y se descuscribe, manea el loading etc
    }
  })
 }
