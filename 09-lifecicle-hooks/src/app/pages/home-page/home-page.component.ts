import {
  afterNextRender,
  afterRenderEffect,
  Component,
  effect,
  OnInit,
  signal,
} from '@angular/core';
import { TitleComponent } from '../../components/title/title';

const log = (...messages: string[]) => {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`, 'color: #bada55');
};

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  
  traditionalProperty = 'Euclides';
  signalProperty = signal('Euclides');

  changeTraditional() {
    this.traditionalProperty  = 'Euclides Psérez';
  }
  changeSignal() {
   this.signalProperty.set('Euclides Pérez');
  }

  /** implements OnInit
   * Solemos implementar OnInit cuando estamos seguros de que esta clase tendrá este metodo de siclo de vida
   * tambien lo agregamos cuando nos queremos asegurar de que el metodo está bien esrito
   * no solamente sucede con el OnInit si no tambien con los demás metodos
   */

  // Constructor este se llama antes de mostrar cualquier cosa en pantalla
  constructor() {
    log('Constructor llamdo');
  }

  // se ejecuta tan pronto como el componente sea inicializado en este caso justo despues del ngOninit
  basicEffect = effect((onCleanup) => {
    log('Disparar efectos secundarios');

    onCleanup(() => {
      log('oncleanup se ejecuta cuando un efecto se va a destruir');
    });
  });
  // Se manda a llamar usualmente para hacer peticiones http inmediatamente despues que se carga el componente
  // ya que este hasta ese punto se encuentra listo para poder comenzarlo a utilizar
  ngOnInit() {
    log(
      'ngOnInit',
      'Se manda a llamar usualmente para hacer peticiones http inmediatamente despues que se carga el componente',
    );
  }
  ngOnChanges() {
    log(
      'ngOnChanges: se ejecuta cada vez que cambian las entradas (inputs) del componente',
      'con input se refeire a una entrada de tipo @Input() nombre = ',
    );
  }

  // Este se ejecuta cada vez que el componente revisa alguna cambio en uns propiedad o señal
  /**
   * Se ejecuta durante las comprobaciones de cambios de Angular.
   *
   * Puede ejecutarse muchas veces durante la vida del componente,
   * por lo que debemos evitar operaciones costosas o efectos secundarios
   * como peticiones HTTP dentro de este método.
   *
   * Se utiliza principalmente cuando necesitamos realizar una
   * comprobación personalizada de cambios.
   *
   * * Algunas situaciones que pueden provocar que Angular ejecute
   * una detección de cambios son:
   *
   * - Eventos del usuario:
   *   click, input, change, submit, keydown, etc.
   *
   * - Cambios en los datos utilizados por el template.
   *
   * - Emisión de valores de observables o eventos que Angular
   *   debe procesar.
   */
  ngDoCheck() {
    log('ngDoCheck', 'Se ejecuta durante la comprobación de cambios de Angular.');
  }

  //Este metodo se ejecuta luego que el componente es inicializado

  ngAfterContentInit() {
    log(
      'ngAfterContentInit',
      'Se ejecuta una vez después de que se haya inicializado el contenido del componente.',
    );
  }
  ngAfterContentChecked() {
    log(
      'ngAfterContentChecked',
      'Se ejecuta cada vez que se ha comprobado si el contenido de este componente ha sufrido cambios.',
    );
  }
  ngAfterViewInit() {
    log(
      'ngAfterViewInit',
      'Se ejecuta una vez después de que la vista del componente se haya inicializado.',
    );
  }
  ngAfterViewChecked() {
    log(
      'ngAfterViewChecked',
      'Se ejecuta cada vez que se ha comprobado si la vista del componente ha sufrido cambios.',
    );
  }

  // este ondestroy es de los mejores lugares para hacer limpiezas de timer, cancelar suscripciones entre otras
  ngOnDestroy() {
    log('Se ejecuta una vez antes de que el componente sea destruido.');
  }
  afterNextRenderEffect = afterNextRender(() => {
    log(
      'Se ejecuta una vez, la próxima vez que todos los componentes se hayan renderizado en el DOM. es decir, luego que un navbar o un sidebar o un footer que esten dentro de la vista del componente actual se hallan mostrado',
    );
  });
  affterRender = afterRenderEffect(() => {
    log('Se ejecuta cada vez que todos los componentes se han renderizado en el DOM.');
  });
}
