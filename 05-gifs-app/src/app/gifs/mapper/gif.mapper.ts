import type { Gif } from './../interfaces/gif.interface';
import type { GiphyItem } from './../interfaces/giphy.interfaces';

export class GifMapper {
    

    static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
       return items.map(this.mapGiphyItemToGif)
    }


    static mapGiphyItemToGif(giphyItem: GiphyItem): Gif {
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url
        }
    }
}