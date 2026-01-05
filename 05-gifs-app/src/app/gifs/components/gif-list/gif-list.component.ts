import { ChangeDetectionStrategy, Component, effect, input } from '@angular/core';
import { GifItemComponent } from '../gif-item/gif-item.component';

@Component({
  selector: 'gif-list',
  imports: [GifItemComponent],
  templateUrl: './gif-list.component.html',
})
export class GifListComponent {
  gifs = input.required<string[]>();

  // constructor() {
  //   effect(() => {
  //     console.log('Gifs recibidos:', this.gifs());
  //   });
  // }
}
