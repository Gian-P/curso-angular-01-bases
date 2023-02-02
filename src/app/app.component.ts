import { Component } from '@angular/core';

//Este decorador espera un argumento, y ese argumento es un objeto, dentro de ese objeto, debemos especificar ciertas propiedades.

@Component({
  
  selector: 'app-root',

  templateUrl: './app.component.html',

  // template:'<span>Fernando</span>',

  styleUrls: ['./app.component.css'],
})

export class AppComponent {

}
