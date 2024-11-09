import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialogo1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogo1.component.html',
  styleUrl: './dialogo1.component.css'
})
export class Dialogo1Component {
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
        { personaje: 'gallo', mensaje: '¡Hola viejo Pablo! ¿Cómo has estado? Llevo años que no te veo, desde que eras compañero de mis papás gallos.' },
        { personaje: 'sabio', mensaje: `¡Muy bien, gallo ${this.nombreUsuario}! Han pasado ya el tiempo y yo sigo aquí, ayudando a los que se cruzan por mi camino. Dime, ¿tú cómo has estado?` },
        { personaje: 'gallo', mensaje: 'Bien bien, solo que... no sé qué carrera voy a estudiar. Llevo un tiempo pensando y todavía no he dado en el clavo con la correcta.' },
        { personaje: 'sabio', mensaje: 'Escoger carrera es una decisión muy importante. No porque vayas a vivir de esto obligatoriamente, pero es una etapa que te va a marcar de por vida.' },
        { personaje: 'gallo', mensaje: 'Sí, eso es lo que me dicen todos, pero aún no sé qué escoger.' },
        { personaje: 'sabio', mensaje: `No te preocupes, ${this.nombreUsuario}, estoy seguro de que pronto estarás seguro de tu futuro.` },
        { personaje: 'sabio', mensaje: `Sabes, ${this.nombreUsuario}, yo hace muchos años estaba pasando por lo mismo que tú estás pasando, así que conozco el sentimiento.` },
        { personaje: 'sabio', mensaje: `Pero tranquilo, ${this.nombreUsuario}, haré mi mayor esfuerzo por guiarte a través de algunas de las carreras que ofrece la universidad.` },
        { personaje: 'gallo', mensaje: '¡Gracias Pablo! Solo tengo una pregunta... ¿tú qué carrera estudiaste?' },
        { personaje: 'sabio', mensaje: 'Yo... eh... ¡la mejor carrera de todas! -o al menos eso pienso yo-, Ingeniería en Sistemas Computacionales.' },
        { personaje: 'gallo', mensaje: '¡Ah! Entiendo, fuiste compañero de universidad de mi papá gallo.' },
        { personaje: 'gallo', mensaje: 'Muchas veces me ha intentado explicar lo que son los sistemas computacionales y la programación, pero la verdad nunca he entendido bien.' },
        { personaje: 'sabio', mensaje: `Sí... yo... relaciono muchos conceptos de la vida y de las demás carreras con la programación, como los tipos de variables, condicionales, ciclos, funcio...` },
        { personaje: 'gallo', mensaje: '¿Qué? No entendí nada de lo que acabas de decir.' },
        { personaje: 'sabio', mensaje: `Ja ja ja. Tranquilo, ${this.nombreUsuario}, si puedo, también te explicaré estos conceptos de una manera simple y, para matar dos pájar...` },
        { personaje: 'sabio', mensaje: 'Bueno, me entiendes. También te guiaré a la par sobre algunas carreras de la universidad.' },
        { personaje: 'gallo', mensaje: '¡Gracias! ¡Estoy listo para aprender algo nuevo!' },
        { personaje: 'sabio', mensaje: '¿Qué te estaba diciendo?' },
        { personaje: 'sabio', mensaje: '¡Ah sí, programación! Uno de los conceptos más básicos que existen aquí son los tipos de variables.' },
        { personaje: 'sabio', mensaje: 'Las variables son como cajas en donde se pueden guardar cosas. Cada caja tiene un nombre y puede guardar un tipo de objeto.' },
        { personaje: 'gallo', mensaje: '¿Objeto? ¿Como qué?' },
        { personaje: 'sabio', mensaje: 'Objetos, como números, palabras, o cosas más complejas.' },
        { personaje: 'gallo', mensaje: '¿Y para qué quiero guardar cosas en cajas?' },
        { personaje: 'sabio', mensaje: `Toma el ejemplo de la electrónica. Aquí, ${this.nombreUsuario}, necesitas organizar todos tus componentes: resistencias, cables, focos LED, etcétera...` },
        { personaje: 'gallo', mensaje: '¡Ah, entiendo! Cada componente es como un tipo de variable.' },
        { personaje: 'sabio', mensaje: `¡Exacto! Así, cada que necesites usar ese objeto, ya sabes en qué caja está.` },
        { personaje: 'gallo', mensaje: 'Gracias, viejo Pablo. Ahora empiezo a entender todo lo que me decía mi padre hace años.' },
        { personaje: 'gallo', mensaje: 'Ya sé que las variables son útiles no solo en programación, ¡sino en diferentes ámbitos de la vida!' },
        { personaje: 'sabio', mensaje: `¡Muy bien dicho, ${this.nombreUsuario}! Ahora estás listo para enfrentarte al primer desafío...` },
        { personaje: 'gallo', mensaje: '¿Desafío? ¿De qué hablas? ¡Aún no estoy listo!' },
        { personaje: 'sabio', mensaje: `Tranquilo, ${this.nombreUsuario}. Es algo fácil, solo tienes que organizar los componentes de electrónica en su respectiva caja.` },
        { personaje: 'sabio', mensaje: `Arrastra cada componente a su caja y, si está bien, se guardará correctamente :)` },
        { personaje: 'sabio', mensaje: `Ten en cuenta que solo tienes tres intentos para fallar. Pero confío en ti, gallo ${this.nombreUsuario}.` },
        { personaje: 'gallo', mensaje: 'Está bien, ¡estoy preparado para el reto!' }
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
