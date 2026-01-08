import { ChangeDetectionStrategy, Component, computed, inject, Query } from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GifListComponent } from "../../components/gif-list/gif-list.component";

@Component({
  imports: [GifListComponent],
  templateUrl: './gif-history.page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryPageComponent {

  gifService = inject(GifService);
  // resivir el query que viene a travez de la url asociada a este componente
  query = toSignal( inject(ActivatedRoute).params.pipe( map(({query}) => query) ) )


  gifsByKey = computed(() =>{
    return this.gifService.getHistoryGifs(this.query());
  })
 }
