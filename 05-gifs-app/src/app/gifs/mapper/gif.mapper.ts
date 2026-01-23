import type { Gif } from './../interfaces/gif.interface';
import type { GiphyItem } from './../interfaces/giphy.interfaces';

export class GifMapper {
    

    // recibe un arreglo de GiphyItem y retorna uno de Gif
    static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
       return items.map(this.mapGiphyItemToGif)
    }


    // recibe un objeto de GiphyItem y retorna uno de Gif
    static mapGiphyItemToGif(giphyItem: GiphyItem): Gif {
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url
        }
    }
}