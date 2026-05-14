import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs'

import { Country } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {

    private baseUrl = 'https://restcountries.com/v3.1';
    private http = inject(HttpClient);

    private _regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

    //retornamos una copia de el arreglo de regions
    get regions(): string[] {
        return [...this._regions];
    }


    getCountriesByRegion(region: string): Observable<Country[]> {
        if (!region) return of([]); // regresamos un observable con un arreglo bacio

        console.log({ region });

        const url = `${this.baseUrl}/region/${region}?fields=cca3,name,borders`;
        return this.http.get<Country[]>(url); // indicamos que nuestro http get va a retornar un arreglo de countryes
    }


    // obtener un pais por el codigo
    getCountryByAlphaCode(alphaCode: string): Observable<Country> {
        const url = `${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`;
        return this.http.get<Country>(url);
    }


    getCountryBordersNamesByCodeArray(countryCodes: string[]): Observable<Country[]> {
        if (!countryCodes || countryCodes.length === 0) return of([]);

        const countriesRequests: Observable<Country>[] = [];

        countryCodes.forEach((code) => {
            const request = this.getCountryByAlphaCode(code); // llamo a la funcion getCountryByAlphaCode repetidas mente para llenar mi arreglos de bordes
            countriesRequests.push(request); // agrego un observable  a mi arreglo de observable
        });

        // combinar varios Observables y esperar a que todos emitan valores para obtenerlos y devolverlos.
        return combineLatest(countriesRequests);
    }
}