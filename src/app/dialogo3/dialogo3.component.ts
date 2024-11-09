import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialogo3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogo3.component.html',
  styleUrl: './dialogo3.component.css'
})
export class Dialogo3Component {
  nombreUsuario: string = ''; 
  dialogos: { personaje: string; mensaje: string }[] = []; 
  indiceDialogo: number = 0;

  @Output() dialogoTerminado = new EventEmitter<void>();

  ngOnInit(): void {
    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
      this.nombreUsuario = nombreGuardado;
      console.log(this.nombreUsuario);
      
    this.dialogos = [
    { personaje: 'gallo', mensaje: '¡Hola de nuevo, Pablo! Las condicionales me fueron útiles. ¿Qué aprenderemos hoy?' },
    { personaje: 'sabio', mensaje: 'Me alegra saberlo, gallo. Hoy te enseñaré algo llamado “ciclos”. Esto te ayudará a repetir tareas sin hacerlo manualmente cada vez.' },
    { personaje: 'gallo', mensaje: '¿Repetir tareas? ¿Para qué querría hacer eso?' },
    { personaje: 'sabio', mensaje: 'Imagina que tienes un matraz vacío y necesitas llenarlo de a poco hasta que esté lleno. ¿Verdad que es una tarea repetitiva?' },
    { personaje: 'gallo', mensaje: '¡Sí! Pero si solo puedo echar un poco de líquido a la vez, ¿cómo puedo saber cuántas veces debo hacerlo?' },
    { personaje: 'sabio', mensaje: 'Ahí es donde los ciclos te ayudan. En programación, puedes usar un ciclo para repetir una acción hasta cumplir una condición.' },
    { personaje: 'gallo', mensaje: '¿Y qué tipo de ciclos puedo usar?' },
    { personaje: 'sabio', mensaje: 'Existen dos tipos principales: el “for”, que usas cuando sabes exactamente cuántas veces repetir la acción, y el “while”, que se repite mientras algo siga siendo cierto.' },
    { personaje: 'gallo', mensaje: '¿Entonces, el “for” sería como decir “llenar el matraz en 5 pasos” y el “while” sería como decir “sigue llenando mientras no esté lleno”?' },
    { personaje: 'sabio', mensaje: '¡Exactamente! Con el “for” controlas la cantidad de veces, y con el “while” solo te detienes cuando la condición cambia.' },
    { personaje: 'sabio', mensaje: 'En programación, eso te ahorra mucho trabajo. Es como un asistente que sigue tus instrucciones.' },
    { personaje: 'gallo', mensaje: 'Pero, ¿cómo sé cuándo parar un ciclo?' },
    { personaje: 'sabio', mensaje: 'Buena pregunta. Siempre necesitas una condición de salida para que el ciclo termine, como dejar de llenar el matraz cuando esté lleno.' },
    { personaje: 'gallo', mensaje: 'Ja ja. No quisiera que se tirara lo que hay en el matraz.' },
    { personaje: 'sabio', mensaje: 'Por eso es importante entender bien la condición para detener el ciclo. Si no, podrías tener un “ciclo infinito”.' },
    { personaje: 'gallo', mensaje: '¡Eso suena peligroso! Pero creo que lo entiendo: repito hasta que cumpla la condición de llenado.' },
    { personaje: 'sabio', mensaje: '¡Exacto! Ahora te guiaré en un ejercicio. Iremos llenando un matraz poco a poco hasta que esté completo.' },
    { personaje: 'gallo', mensaje: '¡Perfecto! Estoy listo para poner en práctica estos ciclos.' }
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


  terminarDialogo(): void {
    this.dialogoTerminado.emit(); 
  }

  get mensajeActual() {
    return this.dialogos[this.indiceDialogo];
  }
}
