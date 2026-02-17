import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
})
export class SearchComponent {

  placeHolder = input.required<string>();

  initialValue = input<string>('');

  strSearch = output<string>();

  // esta señal es producto del caldulo de otra señal por lo que esta se crea con linkedSignal
  inputValue = linkedSignal<string>(() => this.initialValue());
  
  onSearch(query: string) {
    this.strSearch.emit(query.trim());
  }

  // este efecto que contiene una señal siempre se va a disparar
  // cada vez que angular cambie esta señal
  debounceEfect = effect((onCleanup) =>{
    const value = this.inputValue();
    if(!value) return
    const timeout = setTimeout(() => {
      
      this.strSearch.emit(value);

    }, 300);
    // onCleanup se ejecuta automáticamente:
    // - Antes de que el effect vuelva a ejecutarse por un nuevo cambio.
    // - Cuando el effect se destruye (por ejemplo, cuando el componente se destruye).
    onCleanup(() =>{
      clearTimeout(timeout);
    })
  })
}
