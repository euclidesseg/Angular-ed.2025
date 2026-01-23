import { Country } from '../interfaces/country.interface';
import { RESTCountry, Flags } from './../interfaces/rest-country.interface';
export class CountryMapper{



    static mapTransFormToArrayRESTCountryToCountry(restCountry : RESTCountry[]):Country[] {
        console.log(restCountry)
        return restCountry.map(this.mapTransformObjectRESTCountryToCountry);
    }

    // He creado este metodo estatico para tansformar un objeto original de RESTCountry (respuesta de la api) a un Country (objeto que realmente necesito)
    static mapTransformObjectRESTCountryToCountry(restCountryitem: RESTCountry ): Country{

        console.log(restCountryitem)

        return{
            cca2: restCountryitem.cca2,
            flag: restCountryitem.flag,
            flagSvg: restCountryitem.flags.svg,
            name: restCountryitem.name.common,
            capital: restCountryitem.capital[0],
            population: restCountryitem.population
        }
    }
}