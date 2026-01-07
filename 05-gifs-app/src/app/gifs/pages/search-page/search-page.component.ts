import { Component, inject, signal } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';
import { GifListComponent } from '../../components/gif-list/gif-list.component';

@Component({
  selector: 'app-search-page.component',
  imports: [GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent { 

  gifService = inject(GifService);

  gifs = signal<Gif[]>([])
  
  onSearch(query:string){
    if(!query)return;
    
    this.gifService.searchGifByQuery(query).subscribe((resp) =>{
      this.gifs.set(resp)
    });
  }
}
