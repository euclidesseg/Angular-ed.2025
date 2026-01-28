import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Query } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
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
      delay(3000),
      map(items => CountryMapper.mapTransFormToArrayRESTCountryToCountry(items)),
      // catchError debe retornar un observable o lanzar un error que detenga la ejecucion
      catchError((error) =>{
        console.log(`Error fetching ${error}`);
        return throwError(() => new Error(`No se pudo obtener paises con el query ${query}`))
      })
    )
  }
  
  searchByCountry(query:string):Observable<Country[]>{
    query = query.toLocaleLowerCase();
    
    return this.http.get<RESTCountry[]>(`${apiUrl}name/${query}`)
    .pipe(
      delay(3000),
      map(items => CountryMapper.mapTransFormToArrayRESTCountryToCountry(items)),

      catchError((error) =>{
        console.error(`Error fetching ${error}`);
        return throwError(() => new Error(`No se obtuvo un pais con el nombre ${query}`))
      })
    )
  }
  searchCountryBycode(code:string):Observable<Country>{
    code = code.toLocaleLowerCase();
    
    return this.http.get< []>(`${apiUrl}alpha/${code}`)
    .pipe(
      delay(3000),
      map(items => CountryMapper.mapTransFormToArrayRESTCountryToCountry(items)),
      map(countries => countries.at(0) as Country),

      catchError((error) =>{
        console.error(`Error fetching ${error}`);
        return throwError(() => new Error(`No se obtuvo un pais con el nombre ${code}`))
      })
    )
  }
}
