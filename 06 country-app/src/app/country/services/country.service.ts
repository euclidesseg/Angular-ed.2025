import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { map, Observable } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';
import { Country } from '../interfaces/country.interface';

const apiUrl = 'https://restcountries.com/v3.1/';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  searchByCapital(query:string): Observable<Country[]>{
    query = query.toLocaleLowerCase();

    return this.http.get<RESTCountry[]>(`${apiUrl}capital/${query}`)
    .pipe(
      map(items => CountryMapper.mapTransFormToArrayRESTCountryToCountry(items))
    )
  }
}
