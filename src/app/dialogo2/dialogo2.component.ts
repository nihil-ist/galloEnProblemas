import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialogo2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogo2.component.html',
  styleUrl: './dialogo2.component.css'
})
export class Dialogo2Component {
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
        { personaje: 'gallo', mensaje: '¡Hola de nuevo, viejo Pablo! Ahora entiendo bien las variables, gracias a ti.' },
        { personaje: 'sabio', mensaje: 'Me alegra haberte ayudado, Gallo. Ahora... ¿Estás listo para aprender condicionales?' },
        { personaje: 'gallo', mensaje: '¿Condicionales? ¿Qué son? ¿Se comen?' },
        { personaje: 'sabio', mensaje: 'Los condicionales son decisiones, pero en programación.' },
        { personaje: 'gallo', mensaje: '¿Cómo así?' },
        { personaje: 'sabio', mensaje: 'Aquí te va algo simple: ¿Alguna vez te has preguntado cuál es el camino más rápido para llegar a tu granero?' },
        { personaje: 'gallo', mensaje: 'Sí, siempre me regreso por el camino más rápido, aunque a veces está inundado y tengo que tomar otro.' },
        { personaje: 'sabio', mensaje: 'Ok, esto en programación se llama un “if”. Por ejemplo, “si el camino está inundado, toma otro camino”.' },
        { personaje: 'gallo', mensaje: '¡Oh! Entonces el “if” es como preguntar “si…” algo pasa, ¿verdad?' },
        { personaje: 'sabio', mensaje: 'Sí, y a veces puedes agregar un “else”, que es lo que haces si la respuesta es “no”.' },
        { personaje: 'gallo', mensaje: 'Entonces, ¿el “else” sería como… si el camino no está inundado, sigo por ahí?' },
        { personaje: 'sabio', mensaje: '¡Exacto! Eso es un condicional completo: “if” para cuando algo sucede y “else” para lo contrario.' },
        { personaje: 'gallo', mensaje: '¡Wow, eso es bastante detallado! ¿Cómo puedo ponerlo en práctica?' },
        { personaje: 'sabio', mensaje: 'Acompáñame, en este ejemplo de Medicina. Un gallo tendrá una situación en particular y tú tendrás que ayudarlo tomando una decisión.' },
        { personaje: 'gallo', mensaje: 'Entendido, ¡Vamos a ello!' },
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
