import { ListaComponent } from './heroes/lista/lista.component';
import { HeroeComponent } from './heroes/heroe/heroe.component';
import { ContadorComponent } from './contador/contador.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ ContadorComponent , HeroeComponent, ListaComponent
  ]
})
export class AppComponent {


}
