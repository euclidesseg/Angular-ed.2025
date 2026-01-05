import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'gif-item',
  imports: [],
  templateUrl: './gif-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifItemComponent { 

  gifUrl = input.required<string>();
}
