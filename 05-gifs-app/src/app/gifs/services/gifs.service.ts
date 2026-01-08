import { environment } from '@environments/environment';
import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import type { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';


const loadHistoryGifsFromLocalStorage = ():Record<string, Gif[]> =>{
    const gifs = localStorage.getItem('historyGifs');
    if(!gifs) return {};
    try{
        return JSON.parse(gifs) as Record<string,Gif[]>
    }catch(err){
        console.error("Erros cargando elementos desde el localSrorage")
        return {}
    }
}

@Injectable({ providedIn: 'root' })
export class GifService {


    // permite hacer peticiones GET PUT DELET PATCH
    private http = inject(HttpClient); 

    constructor() {
        this.loadTrendyingGifs();
    }


 

    trendingGifs = signal<Gif[]>([])
    trendingGifsLoading = signal<boolean>(true)

    searchHistory = signal<Record<string, Gif[]>>(loadHistoryGifsFromLocalStorage());// este sera un objeto con la siguiente firma {'Reaction':[reaction1,reaction2,reaction3]}
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory())) // esto será un arreglo con todas las keys de mi historial de busqueda


    saveHistoryToLocalStorage = effect(() =>{
        console.log(`Historico de gifs ${this.searchHistory()}`)
        localStorage.setItem('historyGifs', JSON.stringify(this.searchHistory()))
    })

    loadTrendyingGifs() {
        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
            params: {
                api_key: environment.apiKey,
                limit: 20
            }
        }).subscribe((resp) => {
            console.log({ resp })
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data)
            this.trendingGifs.set(gifs);
            this.trendingGifsLoading.set(false);
        })
    }

    searchGifByQuery(query: string):Observable<Gif[]> { // Este metodo regresa un observable al cual nos susrcribiremos cuando lo necesitemos en cualquier componente
        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
            params: {
                api_key: environment.apiKey,
                q: query,
                limit:20
            }
        })
        // pipe es un metodo para encadenar operadores rxjs antes de suscribirnos al observable
        .pipe(  
            map(({data}) => data),// Map me permite transformar la data y devolverla antes de subsribirme
            map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
            //TODO historial
            // el tap no permite transformar valores lo unico que hace es realizar un efecto secundario
            tap((items) => {
                this.searchHistory.update((history) => ({...history,[query.toLowerCase()]:  items}))
                console.log(this.searchHistory())
            }),
        )
        
    }

    getHistoryGifs(query:string):Gif[]{
        return this.searchHistory()[query]??[];
    }

}