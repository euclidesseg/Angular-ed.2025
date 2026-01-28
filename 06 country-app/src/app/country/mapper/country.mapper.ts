import { Country } from '../interfaces/country.interface';
import { RESTCountry, Flags, CurrencyDetail } from './../interfaces/rest-country.interface';
export class CountryMapper {



    // Este metodo estatico resibe un arreglo de RESTCountry y devuelve un arreglo de Country para mejorar la respuesta y datos
    static mapTransFormToArrayRESTCountryToCountry(restCountry: RESTCountry[]): Country[] {
        return restCountry.map(this.mapTransformObjectRESTCountryToCountry);
    }

    // He creado este metodo estatico para tansformar un objeto original de RESTCountry (respuesta de la api) a un Country (objeto que realmente necesito)
    static mapTransformObjectRESTCountryToCountry(restCountryitem: RESTCountry): Country {
        // 1. Transformar el objeto de monedas en un array fácil de usar
        const currenciesArray = restCountryitem.currencies
            ? Object.values(restCountryitem.currencies)
                .filter((c): c is CurrencyDetail => !!c) // Filtramos nulos por seguridad
                .map(c => ({ name: c.name, symbol: c.symbol }))
            : [];

        return {
            cca2: restCountryitem.cca2,
            cca3: restCountryitem.cca3,
            flag: restCountryitem.flag,
            flagSvg: restCountryitem.flags.svg,
            name: restCountryitem.translations['spa']?.common ?? restCountryitem.name.common,
            officialName: restCountryitem.translations['spa']?.official ?? restCountryitem.name.official,
            // La capital es un array, tomamos el primero o un string vacío si no tiene
            capital: restCountryitem.capital ? restCountryitem.capital[0] : 'Sin Capital',
            population: restCountryitem.population,
            region: restCountryitem.region,
            subregion: restCountryitem.subregion ?? 'N/A',
            currencies: currenciesArray,
            // Si no tiene fronteras (islas), devolvemos un array vacío
            borders: restCountryitem.borders ?? [],
            mapUrl: restCountryitem.maps.googleMaps

        }
    }
}