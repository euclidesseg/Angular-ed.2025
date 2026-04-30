import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'toggleCase' // El nombre del pipe que se usará en las plantillas
})

// Pipetransform es una interfaz que obliga a implementar el método transform, que es donde se define la lógica del pipe
export class ToggleCasePipe implements PipeTransform{

    // value es el argumento que se le pasa al pipe desde la plantilla.
    // ...args es un array de argumentos adicionales que se pueden pasar al pipe desde la plantilla.
    transform(value: string, upper:boolean):string {
        return upper? value.toUpperCase():value.toLowerCase();
    }

}