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
  nombreGuardado: string | null = '';
  mostrarNuevoInput: boolean = false; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.nombreGuardado = localStorage.getItem('nombreUsuario');
  }

  empezarJuego() {
    if (this.mostrarNuevoInput) {
      localStorage.setItem('nombreUsuario', this.nombreUsuario);
      console.log("Nombre del usuario guardado en localStorage:", this.nombreUsuario);
    } else {
      console.log("Continuando con el nombre guardado:", this.nombreGuardado);
    }
    this.router.navigate(['/juego1']);
  }

  ingresarOtroNombre() {
    this.mostrarNuevoInput = true;
    this.nombreUsuario = ''; 
  }
}
