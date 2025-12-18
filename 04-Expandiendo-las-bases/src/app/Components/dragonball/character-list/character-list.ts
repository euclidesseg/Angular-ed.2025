import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class CharacterList {
  // input.required<Character[]>() Esto me indica que la propiedad characters de tipo arreglo de Character, es requerida en este componente
  // es decir, que para yo usar este componente en un componente superior, el componente padre que lo usará
  // deberá proporcionar dicha propiedad.
  title = input.required<string>()
  characters = input.required<Character[]>(); 
}
