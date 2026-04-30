import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent { 


  localeService = inject(LocaleService);

  nameLower = signal('euclides');
  nameUpper = signal('EUCLIDES');
  fullName = signal('eEcliDes PeReZ');


  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanUp)  =>{
    const interval = setInterval(() =>{
      this.customDate.set(new Date());
      console.log('tick');
    },1000)
    onCleanUp(() => {
      clearInterval(interval);
    })
  })
  // un efecto es una función que se ejecuta cada vez que una señal que se utiliza dentro de ella cambia, y también se ejecuta la primera vez que se crea el efecto. 
  // Además, el efecto puede recibir una función de limpieza (onCleanUp) que se ejecuta cuando el efecto se destruye o se vuelve a ejecutar, lo que permite limpiar recursos como intervalos o suscripciones.

  changeLocale(locale:'es'|'en'|'fr'){
    this.localeService.changeLocale(locale);
  }
}
