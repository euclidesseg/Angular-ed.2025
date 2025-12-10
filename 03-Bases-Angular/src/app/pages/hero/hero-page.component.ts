import { TitleCasePipe, UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

@Component({
    imports:[UpperCasePipe],
    template:`
   <h1>{{ heroName() }}</h1>

<dl>
  <td>Nombre:</td>
  <dd>{{ heroName() }}</dd>

  <td>Edad:</td>
  <dd>{{ heroAge() }}</dd>

  <td>Método:herodesCiprion</td>
  <dd>{{ heroDescription() }}</dd>

  <td>Capitalizado:</td>
  <dd> {{ heroNameCapitalize() | uppercase }} </dd>
</dl>

<button (click)="changeHero()" class="btn btn-primary mx-2">
  Cambiar nombre
</button>

<button (click)="changeAge()" class="btn btn-primary">Cambiar edad</button>

<button (click)="resetForm()" class="btn btn-primary mx-2">Reset</button>
    `,
    styles: `
        button{
           background-color:black;
           color:white;
           padding:.5rem;
           margin: .5rem 1rem;
        }
        dd{
            font-weight:bold;
        }
    `
})
export class HeroPageComponent{

    heroName = signal('Ironman');
    heroAge = signal(45);

    changeHero = () =>{
        this.heroName.set('Spiderman');
        this.heroAge.set(22);
    }

    resetForm = () =>{
        this.heroName.update((v) => 'Ironman');
        this.heroAge.update((v) => 45);
    }
    changeAge = () =>{
        this.heroAge.set(60);
    }


    // Señales computadas
    //== una señal computada no es más que una señal pero de solo lectura

    heroDescription = computed(() =>{
       const description = `${this.heroName()} - ${this.heroAge()}`
       return description;
    })

    heroNameCapitalize = computed(() =>{
        const name = this.heroName();
        return name;
    })
}