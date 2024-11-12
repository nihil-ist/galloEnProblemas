import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dialogo4Component } from '../dialogo4/dialogo4.component';
import { RouterModule } from '@angular/router';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-nivel-funciones',
  standalone: true,
  imports: [CommonModule, Dialogo4Component, RouterModule],
  templateUrl: './nivel-funciones.component.html',
  styleUrl: './nivel-funciones.component.css'
})
export class NivelFuncionesComponent {
  preguntas = [
    { texto: '¿Prefieres la mañana o la noche?', respuestaIzquierda: 'Mañana', respuestaDerecha: 'Noche' },
    { texto: '¿Te gusta trabajar solo o en equipo?', respuestaIzquierda: 'Solo', respuestaDerecha: 'Equipo' },
    // { texto: '¿Te sientes cansado después de estar con muchas personas?', respuestaIzquierda: 'Sí', respuestaDerecha: 'No' },
    // { texto: '¿Te gusta participar en actividades sociales?', respuestaIzquierda: 'A veces', respuestaDerecha: 'Siempre' },
    // { texto: '¿Prefieres pasar tu tiempo libre en casa o salir?', respuestaIzquierda: 'En casa', respuestaDerecha: 'Salir' },
    // { texto: '¿Eres más reservado al conocer gente nueva?', respuestaIzquierda: 'Sí', respuestaDerecha: 'No' },
    // { texto: '¿Te sientes más cómodo hablando en grupos pequeños?', respuestaIzquierda: 'Sí', respuestaDerecha: 'No' },
    // { texto: '¿Prefieres leer un libro o ir a una fiesta?', respuestaIzquierda: 'Leer un libro', respuestaDerecha: 'Ir a una fiesta' },
    // { texto: '¿Disfrutas de la conversación casual con extraños?', respuestaIzquierda: 'No', respuestaDerecha: 'Sí' },
    // { texto: '¿Te gusta ser el centro de atención?', respuestaIzquierda: 'No', respuestaDerecha: 'Sí' }
  ];
  
  
  indicePregunta = 0;
  galloImagen = 'assets/thinker.png';
  respuestasHabilitadas = true; 
  mostrarResultado: boolean = false;
  introvertidoCount: number = 0;
  extrovertidoCount: number = 0;
  mostrarDialogo: boolean = true;

  constructor(private audioService: AudioService) {}

  ocultarDialogo(): void {
    this.mostrarDialogo = false;
  }
  
  ngOnInit(): void {
    this.reiniciarTest(); 
  }

  get preguntaActual() {
    return this.preguntas[this.indicePregunta];
  }

  seleccionarRespuesta(respuesta: 'izquierda' | 'derecha') {
    this.respuestasHabilitadas = false;
  
    if (respuesta === 'izquierda') {
      this.introvertidoCount++;
    } else {
      this.extrovertidoCount++;
    }
  
    this.galloImagen = 'assets/normal.png'; 
    setTimeout(() => {
        this.galloImagen = 'assets/happy.png';
        this.audioService.playSound('assets/sounds/yay.mp3');
        setTimeout(() => {
            this.galloImagen = 'assets/thinker.png';

            this.indicePregunta++;
            this.respuestasHabilitadas = true;

            if (this.indicePregunta >= this.preguntas.length) {
                this.mostrarResultado = true;
                this.audioService.playSound('assets/sounds/yay.mp3');
                this.completeLevel();
            }
        }, 2500); 
    }, 500); 
  }
  
  reiniciarTest() {
    this.introvertidoCount = 0; 
    this.extrovertidoCount = 0; 
    this.indicePregunta = 0;
    this.mostrarResultado = false; 
    this.respuestasHabilitadas = true; 
    this.galloImagen = 'assets/thinker.png'; 
  }

  completeLevel(): void {
    localStorage.setItem('currentLevel', "5");
  }
  
}
