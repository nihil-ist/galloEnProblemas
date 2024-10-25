import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [FormsModule, RouterModule, RouterOutlet, CommonModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {
  nombreUsuario: string = '';
  nombreGuardado: string | null = ''; // Variable para almacenar el nombre guardado
  mostrarNuevoInput: boolean = false; // Controla si mostrar el input para un nuevo nombre

  constructor(private router: Router) {}

  ngOnInit() {
    // Verificar si hay un nombre guardado en el localStorage
    this.nombreGuardado = localStorage.getItem('nombreUsuario');
  }

  empezarJuego() {
    if (this.mostrarNuevoInput) {
      // Si el usuario decidió ingresar un nuevo nombre, se guarda y continúa
      localStorage.setItem('nombreUsuario', this.nombreUsuario);
      console.log("Nombre del usuario guardado en localStorage:", this.nombreUsuario);
    } else {
      // Si el usuario continúa con el nombre guardado
      console.log("Continuando con el nombre guardado:", this.nombreGuardado);
    }
    // Redirige al componente del juego
    this.router.navigate(['/juego1']);
  }

  // Permite cambiar a la opción de ingresar un nuevo nombre
  ingresarOtroNombre() {
    this.mostrarNuevoInput = true;
    this.nombreUsuario = ''; // Reinicia el input para el nuevo nombre
  }
}
