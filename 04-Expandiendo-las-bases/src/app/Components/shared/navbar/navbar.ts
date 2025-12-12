import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

}
// Notas
/*
===========================================================
- RouterLink: permite enlazar rutas sin recargar la página.
- RouterLinkActive: permite aplicar clases CSS dinámicas cuando la ruta está activa.
===========================================================

*/