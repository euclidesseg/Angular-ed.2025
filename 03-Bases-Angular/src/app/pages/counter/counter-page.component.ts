import { Component, signal } from "@angular/core";

@Component({
    templateUrl:'./counter-page.component.html',
    styles:`
        button{
            padding:5px;
            margin: 5px 10px
        }
    `,
})
export class CounterPageComponent{
    counter = 10;

    constructor(){
        setInterval(() => {
            // ⛔ ESTA LÍNEA CAMBIA EL VALOR EN MEMORIA, PERO NO NOTIFICA A ANGULAR
            // Por lo tanto, el template {{counter}} NO se actualizará.
            this.counter += 1

            // ✅ DESCOMENTAR PARA HACER REACTIVO:
            // Si descomentas esta línea, la Signal notifica a Angular.
            // El template se refresca y {{counter}} se actualiza por el 'efecto colado'.
            this.counterSignal.update(v => v+1);
             console.log('tick')
        }, 2000);
    }
    increaseBy = (value:number) =>{
        this.counter += value;
        this.counterSignal.update((current) => current + value)
    }

    resetCounter = () =>{
        this.counter = 0;
        this.counterSignal.set(0)
    }


    
    counterSignal = signal(1);



    // Zoneless
    /*
    * Significa ejecutar Angular sin depender de Zone.js.
    * Esto te obliga a controlar tú mismo cuándo Angular debe actualizar la interfaz, porque ya no habrá una zona
    * se activa desde el app.config mediante provideZonelessChangeDetection()
    */

    // Señales
    /* 
    *  Las Signals son el mecanismo de reactividad nativo en Zoneless.
    *  Cambian y notifican a Angular exactamente qué parte del DOM actualizar.
    */
}

