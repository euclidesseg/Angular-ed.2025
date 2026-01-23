import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { SearchComponent } from "../../components/search-component/search.component";
import { TableComponent } from "../../components/table-component/table.component";
import { CountryService } from '../../services/country.service';
import { RESTCountry } from '../../interfaces/rest-country.interface';
import { Country } from '../../interfaces/country.interface';


@Component({
  selector: 'app-by-capital',
  imports: [SearchComponent, TableComponent],
  templateUrl: './by-capital.component.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService);

  isLoading = signal(false);
  isError = signal<string | null>(null);

  countries = signal<Country[]>([]);
  onSearch(querySearch: string) {

    if (this.isLoading()) return;

    this.isLoading.set(true);
    this.isError.set(null);// limpiar errr en caso de existir

    this.countryService.searchByCapital(querySearch).subscribe((resp) => {
      this.isLoading.set(false); // false porque ya cargo la data correctamente
      this.countries.set(resp);
      
      console.log(this.countries());
    })
  }
}
