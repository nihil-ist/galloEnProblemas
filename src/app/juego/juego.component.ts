import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
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
    localStorage.setItem('currentLevel', '0');
    if (this.mostrarNuevoInput || !this.nombreGuardado) {
      localStorage.setItem('nombreUsuario', this.nombreUsuario);
      this.nombreGuardado = this.nombreUsuario;  
      console.log("Nombre del usuario guardado en localStorage:", this.nombreUsuario);
    } else {
      console.log("Continuando con el nombre guardado:", this.nombreGuardado);
    }
    this.router.navigate(['/variables']);
  }

  ingresarOtroNombre() {
    this.mostrarNuevoInput = true;
    this.nombreUsuario = ''; 
  }

continuarJuego(): void {
  const savedLevel = localStorage.getItem('currentLevel');
  switch (savedLevel) {
    case "2":
      this.router.navigate(['/condicionales']);
      break;
    case "3":
      this.router.navigate(['/ciclos']);
      break;
    case "4":
      this.router.navigate(['/funciones']);
      break;
    case "5":
      this.router.navigate(['/fine']);
      break;
    default:
      this.router.navigate(['/variables']);
      break;
  }
  
}

}
