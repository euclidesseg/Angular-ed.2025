import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { Country } from '../../interfaces/country.interface';
import { rxResource } from '@angular/core/rxjs-interop'
import { NotFoundComponent } from '../../components/not-found/not-found.component';
import { DecimalPipe } from '@angular/common';
import { Location } from '@angular/common';


@Component({
  selector: 'app-country-page',
  imports: [NotFoundComponent, DecimalPipe],
  templateUrl: './country-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryPageComponent {

  countryService = inject(CountryService);

  countryCode = inject(ActivatedRoute).snapshot.params['codec'];
  location = inject(Location)

  goBack(){
    this.location.back();
  }

  countryRxResource = rxResource<Country | null, {code:string}>({
    params: () => ({ code: this.countryCode }),
    // Angular se suscribe y se desuscribe automáticamente
    stream: ({ params }) => {
      if(!params.code) return of(null)
      return this.countryService.searchCountryBycode(params.code)
      // angular maneja por si solo el error, se susbribe y se descuscribe, manea el loading etc
    }
  })
}
