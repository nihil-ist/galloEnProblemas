import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dialogo4Component } from '../dialogo4/dialogo4.component';
import { RouterModule } from '@angular/router';

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
    { texto: '¿Te sientes cansado después de estar con muchas personas?', respuestaIzquierda: 'Sí', respuestaDerecha: 'No' },
    { texto: '¿Te gusta participar en actividades sociales?', respuestaIzquierda: 'A veces', respuestaDerecha: 'Siempre' },
    { texto: '¿Prefieres pasar tu tiempo libre en casa o salir?', respuestaIzquierda: 'En casa', respuestaDerecha: 'Salir' },
    { texto: '¿Eres más reservado al conocer gente nueva?', respuestaIzquierda: 'Sí', respuestaDerecha: 'No' },
    { texto: '¿Te sientes más cómodo hablando en grupos pequeños?', respuestaIzquierda: 'Sí', respuestaDerecha: 'No' },
    { texto: '¿Prefieres leer un libro o ir a una fiesta?', respuestaIzquierda: 'Leer un libro', respuestaDerecha: 'Ir a una fiesta' },
    { texto: '¿Disfrutas de la conversación casual con extraños?', respuestaIzquierda: 'No', respuestaDerecha: 'Sí' },
    { texto: '¿Te gusta ser el centro de atención?', respuestaIzquierda: 'No', respuestaDerecha: 'Sí' }
  ];
  
  
  indicePregunta = 0;
  galloImagen = 'assets/thinker.png';
  respuestasHabilitadas = true; // Controla si las respuestas están habilitadas
  mostrarResultado: boolean = false;
  introvertidoCount: number = 0;
  extrovertidoCount: number = 0;
  mostrarDialogo: boolean = true;

  // Método para ocultar el diálogo al finalizar
  ocultarDialogo(): void {
    this.mostrarDialogo = false;
  }
  
  ngOnInit(): void {
    this.reiniciarTest(); // Llama al método al iniciar el componente
  }

  get preguntaActual() {
    return this.preguntas[this.indicePregunta];
  }

  seleccionarRespuesta(respuesta: 'izquierda' | 'derecha') {
    // Desactiva las respuestas
    this.respuestasHabilitadas = false;
  
    // Incrementa el contador según la respuesta seleccionada
    if (respuesta === 'izquierda') {
      this.introvertidoCount++;
    } else {
      this.extrovertidoCount++;
    }
  
    // Cambia a la imagen del gallo feliz y espera 3 segundos
    this.galloImagen = 'assets/normal.png'; // Imagen intermedia
    setTimeout(() => {
        // Cambia a la imagen del gallo feliz y espera 3 segundos
        this.galloImagen = 'assets/happy.png';
        setTimeout(() => {
            // Regresa la imagen thinker del gallo
            this.galloImagen = 'assets/thinker.png';

            // Pasa a la siguiente pregunta
            this.indicePregunta++;
            // Vuelve a habilitar las respuestas
            this.respuestasHabilitadas = true;

            // Si no hay más preguntas, muestra el resultado
            if (this.indicePregunta >= this.preguntas.length) {
                this.mostrarResultado = true;
            }
        }, 2500); // Espera 3 segundos con la imagen feliz
    }, 500); // Espera 1 segundo con la imagen normal
  }
  
  reiniciarTest() {
    this.introvertidoCount = 0; // Reinicia el contador de introvertidos
    this.extrovertidoCount = 0; // Reinicia el contador de extrovertidos
    this.indicePregunta = 0; // Reinicia el índice de la pregunta
    this.mostrarResultado = false; // Oculta el resultado
    this.respuestasHabilitadas = true; // Habilita nuevamente las respuestas
    this.galloImagen = 'assets/thinker.png'; // Resetea la imagen del gallo
  }

  
}
