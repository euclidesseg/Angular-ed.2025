import { Component, inject, signal } from "@angular/core";
import { CharacterList } from "../../Components/dragonball/character-list/character-list";
import { Character } from "../../interfaces/character.interfaces";
import { CharacterAdd } from "../../Components/dragonball/character-add/character-add";
import { DragonBallService } from "../../services/dragonball.service";


@Component({
    selector: 'app-dragonball', // no es necesario en paginas
    imports:[CharacterList, CharacterAdd],
    templateUrl: './dragonball-super-page.component.html',
    styles: ``,
})
export class DragonBallSuperPageComponent {

    // Inyeccción de dependencias tradicional
    constructor(private dragonBallService: DragonBallService){

    }

    // Recomendado en ultimas versiones
    public dragonBallServiceIn = inject(DragonBallService);
    
}
