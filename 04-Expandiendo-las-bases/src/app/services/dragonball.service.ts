import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interfaces';


const loadFromLocalStorage = (): Character[] =>{
    const characters = localStorage.getItem('characters');

    if (!characters) return [];

    try { // para asegurarnos de que siempre sea un arreglo lo que devolverá
        return JSON.parse(characters) as Character[];
    } catch (error) {
        console.error('Error al parsear characters desde localStorage', error);
        return [];
    }
}

@Injectable({ providedIn: 'root' })
// @Injectable: Transforma la clase en un servicio, 
// e indica con { providedIn: 'root' } que no importa en que luggar de mi aplicación esté, 
// porque este servicio siempre estará vivo recuperando datos
export class DragonBallService {
    constructor() { }



    personajes: Character[] = [
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'vegeta', power: 8001 },
    ]

    characters = signal<Character[]>(loadFromLocalStorage()) 
    // dado que la señal es un generico se le puede indicar que tipo de datos tendrá internamente


    saveToLocalStoage = effect(() =>{
        console.log(`Character count ${this.characters().length}`)
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    })
    agregarPersonaje(newCharacter: Character) {

        this.characters.update(v => [... this.characters(), newCharacter])
    }
}
/*Nota:
    El inconveniente que tenemos al momento de trabar con señales y arreglos es que no se sabe que tipo 
    tipo de información habrá en dichas señales por defecto nunca va a tener un valor nver[]
*/
