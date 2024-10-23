import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {
  nombreUsuario: string = '';

  empezarJuego() {
    console.log("Nombre del usuario:", this.nombreUsuario);
  }
}
