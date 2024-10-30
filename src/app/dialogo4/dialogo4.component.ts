import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialogo4',
  standalone: true,
  imports: [CommonModule, Dialogo4Component],
  templateUrl: './dialogo4.component.html',
  styleUrl: './dialogo4.component.css'
})
export class Dialogo4Component {
  nombreUsuario: string = ''; // Almacena el nombre del usuario
  dialogos: { personaje: string; mensaje: string }[] = []; // Inicializa el arreglo vacío
  indiceDialogo: number = 0;

  @Output() dialogoTerminado = new EventEmitter<void>();

  ngOnInit(): void {
    // Obtén el nombre desde el localStorage cuando se carga el componente
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
      this.nombreUsuario = nombreGuardado;
      console.log(this.nombreUsuario);
      
      // Define el arreglo de diálogos después de obtener el nombre
      this.dialogos = [
        { personaje: 'gallo', mensaje: 'Hola, estoy listo para aprender.' },
        { personaje: 'sabio', mensaje: `Bienvenido, joven ${this.nombreUsuario}. Hoy aprenderemos algo nuevo.` },
        { personaje: 'gallo', mensaje: '¿Qué aprenderemos, maestro?' },
        { personaje: 'sabio', mensaje: 'Condicionales, las herramientas de decisión en programación.' },
        { personaje: 'gallo', mensaje: 'Suena interesante, ¡vamos a intentarlo!' }
      ];
    }
  }

  avanzarDialogo(): void {
    if (this.indiceDialogo < this.dialogos.length - 1) {
      this.indiceDialogo++;
    } else {
      this.terminarDialogo();
    }
  }

  // Método para ocultar el diálogo y comenzar el juego
  terminarDialogo(): void {
    this.dialogoTerminado.emit(); 
  }

  // Obtener el mensaje actual y el personaje
  get mensajeActual() {
    return this.dialogos[this.indiceDialogo];
  }
}
