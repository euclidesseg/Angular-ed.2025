import { output, signal } from '@angular/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Character } from '../../../interfaces/character.interfaces';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {
  name =  signal('');
  power =  signal(0);


  newCharacterEvent = output<Character>();// enviar un evento al componente padre

  agregarPersonaje(){
          if(!this.name() || !this.power() || this.power() <= 0){
              return
          }
          const newcharacter : Character = {
              id:Math.floor(Math.random()*1000),
              name:this.name(),
              power: this.power()
  
          }
          this.resetFields()
          this.newCharacterEvent.emit(newcharacter);
          // this.characters.update(v => [... this.characters(), character])  
      }
  
      resetFields(){
        console.log('resetear')
          this.name.set('')
          this.power.set(0)
      }
}
