import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel-condicionales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nivel-condicionales.component.html',
  styleUrl: './nivel-condicionales.component.css'
})
export class NivelCondicionalesComponent {
  pacientes = [
    { sintoma: 'fiebre', tratamientoCorrecto: 'medicamento', imagen: 'assets/paciente1.png' },
    { sintoma: 'deshidratación', tratamientoCorrecto: 'líquidos', imagen: 'assets/paciente2.png' },
    { sintoma: 'dolor de cabeza', tratamientoCorrecto: 'descanso', imagen: 'assets/paciente3.png' }
  ];

  // Estado del índice del paciente actual
  indicePacienteActual: number = 0;

  // Estado de vidas
  vidas: number = 3;
  mensajeResultado: string = 'Ayuda a los otros gallos!';

  // Estado de la imagen del gallo
  galloImagen: string = 'assets/normal.png';

  // Función para verificar el tratamiento y pasar al siguiente paciente si es correcto
  tratarPaciente(seleccion: string): void {
    if (this.vidas === 0 || this.indicePacienteActual >= this.pacientes.length) return;  // Evitar interacción si el juego ha terminado o todos los pacientes han sido tratados

    const pacienteActual = this.pacientes[this.indicePacienteActual];

    if (seleccion === pacienteActual.tratamientoCorrecto) {
      this.mensajeResultado = '¡Correcto!';
      this.mostrarGalloFeliz();

      // Esperar 3 segundos y pasar al siguiente paciente
      
    } else {
      this.mensajeResultado = 'Ups, intenta de nuevo.';
      this.mostrarGalloTriste();
      this.restarVida();
    }
  }

  // Función para restar una vida
  restarVida(): void {
    if (this.vidas > 0) {
      this.vidas -= 1;
    }
  }

  // Funciones para cambiar la imagen del gallo
  mostrarGalloTriste(): void {
    this.galloImagen = 'assets/sad.png';
    setTimeout(() => this.galloImagen = 'assets/normal.png', 3000);
  }

  mostrarGalloFeliz(): void {
    this.galloImagen = 'assets/happy.png';
    setTimeout(() => {
      this.indicePacienteActual++;
      this.mensajeResultado = 'Ayuda a los otros gallos!';

      // Revisar si se han completado todos los pacientes
      if (this.indicePacienteActual >= this.pacientes.length) {
        this.mensajeResultado = '¡Felicidades! Has ayudado a todos los pacientes.';
      } else {
        this.galloImagen = 'assets/normal.png';
      }
    }, 3000);
  }

  // Función para reiniciar el juego
  reiniciarJuego(): void {
    this.vidas = 3;
    this.mensajeResultado = '';
    this.indicePacienteActual = 0;
    this.galloImagen = 'assets/normal.png';
  }
}
