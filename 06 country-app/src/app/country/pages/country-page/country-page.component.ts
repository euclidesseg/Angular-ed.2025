import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-page',
  imports: [],
  templateUrl: './country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent {

  countryService = inject(CountryService);
 }
