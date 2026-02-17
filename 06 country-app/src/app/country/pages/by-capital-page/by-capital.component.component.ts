import { ChangeDetectionStrategy, Component, inject, OnDestroy, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchComponent } from "../../components/search-component/search.component";
import { TableComponent } from "../../components/table-component/table.component";
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-by-capital',
  imports: [SearchComponent, TableComponent],
  templateUrl: './by-capital.component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent{

  constructor(){
     this.activatedRoute.queryParamMap
    .subscribe(params => {
      const query = params.get('query') ?? '';

      if (!query) return;

      this.query.set(query);
      this.onSearch(query);
    });
  }
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);
  route = inject(Router)

  isLoading = signal(false);
  isError = signal<string | null>(null);
  countries = signal<Country[]>([]);

  // queryParam = this.activatedRoute.snapshot.queryParamMap.get('query')?? '';

  query = signal('');
  
  onSearch(querySearch: string) {
    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);// limpiar errr en caso de existir

    this.countryService.searchByCapital(querySearch)
      .subscribe(
        {
          next: (resp) => {
            this.isLoading.set(false); // false porque ya cargo la data correctamente
            this.countries.set(resp);
            this.route.navigate(['/country/by-capital'],{
              queryParams:{
                query:querySearch,
              }
            })
          },
          error:(err) => {
            this.isLoading.set(false)
            this.countries.set([])
            this.isError.set(err)
          },
        }
      )
  }
}
