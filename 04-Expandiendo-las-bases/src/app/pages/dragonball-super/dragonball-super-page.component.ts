import { Component, signal } from "@angular/core";
import { CharacterList } from "../../Components/dragonball/character-list/character-list";
import { Character } from "../../interfaces/character.interfaces";
import { CharacterAdd } from "../../Components/dragonball/character-add/character-add";


@Component({
    selector: 'app-dragonball', // no es necesario en paginas
    imports:[CharacterList, CharacterAdd],
    templateUrl: './dragonball-super-page.component.html',
    styles: ``,
})
export class DragonBallSuperPageComponent {
    name =  signal('');
    power =  signal<number>(0);

    personajes: Character[] = [
        {id: 1, name: 'Goku', power: 9001},
        {id: 2, name: 'vegeta', power: 8001},
    ]
    value = parseInt('2');

    characters = signal<Character[]>(this.personajes) // dado que la señal es un generico se le puede indicar que tipo de datos tendrá internamente


    agregarPersonaje(){

        if(!this.name() || !this.power() || this.power() <= 0){
            return
        }
        const character : Character = {
            id:this.characters().length + 1,
            name:this.name(),
            power: this.power()

        }
        this.characters.update(v => [... this.characters(), character])

        this.resetFields()
    }

    resetFields(){
        this.name.set('')
        this.power.set(0)
    }
}

//Nota:
/* El inconveniente que tenemos al momento de trabar con señales y arreglos es que no se sabe que tipo 
    tipo de información habrá en dichas señales por defecto nunca va a tener un valor nver[]
*/