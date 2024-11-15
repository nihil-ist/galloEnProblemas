import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dialogo2Component } from '../dialogo2/dialogo2.component';
import { RouterLink } from '@angular/router';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-nivel-condicionales',
  standalone: true,
  imports: [CommonModule, Dialogo2Component, RouterLink],
  templateUrl: './nivel-condicionales.component.html',
  styleUrl: './nivel-condicionales.component.css'
})
export class NivelCondicionalesComponent {
  pacientes = [
    { nombre: 'El gallo Paco' ,sintoma: 'fiebre', tratamientoCorrecto: 'medicamento', imagen: 'assets/paciente1.png' },
    { nombre: 'El gallo Juanin',sintoma: 'hambre', tratamientoCorrecto: 'comida', imagen: 'assets/paciente2.png' },
    { nombre: 'La gallina Coco',sintoma: 'deshidratación', tratamientoCorrecto: 'liquidos', imagen: 'assets/paciente3.png' }
  ];

  indicePacienteActual: number = 0;
  vidas: number = 3;
  mensajeResultado: string = 'Ayuda a los otros gallos!';
  galloImagen: string = 'assets/normal.png';
  botonesDesactivados: boolean = false;
  mostrarDialogo: boolean = true;

  constructor(private audioService: AudioService) { }

  ocultarDialogo(): void {
    this.mostrarDialogo = false;
  }
  tratarPaciente(seleccion: string): void {
    if (this.vidas === 0 || this.indicePacienteActual >= this.pacientes.length) return; 

    const pacienteActual = this.pacientes[this.indicePacienteActual];

    if (seleccion === pacienteActual.tratamientoCorrecto) {
      this.mensajeResultado = '¡Correcto!';
      this.mostrarGalloFeliz();
    } else {
      this.mensajeResultado = 'Ups, intenta de nuevo.';
      this.mostrarGalloTriste();
      this.restarVida();
    }
  }

  restarVida(): void {
    if (this.vidas > 0) {
      this.vidas -= 1;
      this.audioService.playSound('assets/sounds/hit.mp3');
    }
  }

  mostrarGalloTriste(): void {
    this.botonesDesactivados = true;
    this.galloImagen = 'assets/sad.png';

    setTimeout(() => {
      this.galloImagen = 'assets/normal.png';
      this.botonesDesactivados = false;
    }, 3000);
  }

  mostrarGalloFeliz(): void {
    this.botonesDesactivados = true;
    this.galloImagen = 'assets/happy.png';
    this.audioService.playSound('assets/sounds/yay.mp3');

    setTimeout(() => {
      this.indicePacienteActual++;
      this.mensajeResultado = 'Ayuda a los otros gallos!';
      this.botonesDesactivados = false;

      if (this.indicePacienteActual >= this.pacientes.length) {
        this.mensajeResultado = '¡Felicidades! Has ayudado a todos los pacientes.';
        this.completeLevel(); 
        this.audioService.playSound('assets/sounds/yay.mp3');
      } else {
        this.galloImagen = 'assets/normal.png';
      }
    }, 3000);
  }

  reiniciarJuego(): void {
    this.vidas = 3;
    this.mensajeResultado = 'Ayuda a los otros gallos!';
    this.indicePacienteActual = 0;
    this.galloImagen = 'assets/normal.png';
  }

  completeLevel(): void {
    localStorage.setItem('currentLevel', "3");
  }
}
