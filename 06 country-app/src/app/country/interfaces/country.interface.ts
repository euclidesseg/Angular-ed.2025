

export interface Country {
    cca2: string;
    cca3: string; // Útil para los bordes
    flag: string;
    flagSvg: string;
    name: string;
    officialName: string;
    capital: string;
    population: number;
    region: string;
    subregion: string;
    currencies: { name: string; symbol: string }[]; // Mapeado desde el objeto de la API arreglo de objetos
    borders: string[];
    mapUrl: string;

}