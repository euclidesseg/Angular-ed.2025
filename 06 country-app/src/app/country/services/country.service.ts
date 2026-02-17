import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Query, signal } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-country.interface';
import { catchError, delay, map, Observable, of, tap, throwError } from 'rxjs';
import { CountryMapper } from '../mapper/country.mapper';
import { Country } from '../interfaces/country.interface';

const apiUrl = 'https://restcountries.com/v3.1/';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);

  // este map (par clave valor) su llave o clave será un string y su valor será un arreglo de paises
  private queryCacheCapital = new Map<string, Country[]>();

  private queryCacheCountry = new Map<string, Country[]>();

  private queryCacheRegion = new Map<string, Country[]>();

  searchByCapital(query:string): Observable<Country[]>{
    query = query.toLocaleLowerCase();

    if(this.queryCacheCapital.has(query)){
      return of(this.queryCacheCapital.get(query) ?? []) //?? devolver un arreglo vacío en caso de no encontrar un valor
    }
    console.log(`llegando al servidor por ${query}`)
    return this.http.get<RESTCountry[]>(`${apiUrl}capital/${query}`)
    .pipe(
      delay(300),
      map(resp => CountryMapper.mapTransFormToArrayRESTCountryToCountry(resp)), // hasta antes de esta linea la respuesta es de tipo RESTCountry[]
      tap(items => this.queryCacheCapital.set(query, items)),
      // catchError debe retornar un observable o lanzar un error que detenga la ejecucion
      catchError((err) =>{
        console.log(`Error fetching`, err);
        return throwError(() => new Error(`No se pudo obtener paises con el query ${query}`))
      })
    )
  }
  
  searchByCountry(query:string):Observable<Country[]>{
    query = query.toLocaleLowerCase();

    if(this.queryCacheCountry.has(query)){
      return of(this.queryCacheCountry.get(query)?? []);
    }
    console.log('obteniendo desde paises', query)
    
    return this.http.get<RESTCountry[]>(`${apiUrl}name/${query}`)
    .pipe(
      delay(300),
      map( resp => CountryMapper.mapTransFormToArrayRESTCountryToCountry(resp)),
      tap(items => this.queryCacheCountry.set(query, items)),
      catchError((error) =>{
        console.error(`Error fetching`, error);
        return throwError(() => new Error(`No se obtuvo un pais con el nombre ${query}`))
      })
    )
  }


  searchByRegion(region:string):Observable<Country[]>{
      if(this.queryCacheRegion.get(region)){
        return of(this.queryCacheRegion.get(region)?? []);
      }

      return this.http.get<RESTCountry[]>(`${apiUrl}region/${region}`)
      .pipe(
        delay(300),
        map(resp => CountryMapper.mapTransFormToArrayRESTCountryToCountry(resp)),
        tap(items => this.queryCacheRegion.set(region, items)),
        catchError((error) => {
          console.error(`Error fetching`, error)
          return throwError(() => new Error(`No se obtuvieron datos con esta region ${region}`))
        })
      )
  }
  searchCountryBycode(code:string):Observable<Country>{
    code = code.toLocaleLowerCase();
    
    return this.http.get< []>(`${apiUrl}alpha/${code}`)
    .pipe(
      delay(300),
      map(items => CountryMapper.mapTransFormToArrayRESTCountryToCountry(items)),
      map(countries => countries.at(0) as Country),

      catchError((error) =>{
        console.error(`Error fetching`, error);
        return throwError(() => new Error(`No se obtuvo un pais con el nombre ${code}`))
      })
    )
  }
}
