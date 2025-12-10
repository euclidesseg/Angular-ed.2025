import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // -> Es como una etiqueta html la cual se llama en el index.html y renderiza el contenido de este componente
  imports: [RouterOutlet], // Permite insertar o renderizar rutas en este componente
  templateUrl: './app.html',
})
export class App {
  title = '03-Bases-Angular';
}
