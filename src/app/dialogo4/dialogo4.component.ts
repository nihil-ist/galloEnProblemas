import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialogo4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogo4.component.html',
  styleUrl: './dialogo4.component.css'
})
export class Dialogo4Component {
  nombreUsuario: string = ''; 
  dialogos: { personaje: string; mensaje: string }[] = []; 
  indiceDialogo: number = 0;

  @Output() dialogoTerminado = new EventEmitter<void>();

  ngOnInit(): void {
    document.addEventListener('keydown', this.handleKeydown.bind(this));

    const nombreGuardado = localStorage.getItem('nombreUsuario');
    if (nombreGuardado) {
      this.nombreUsuario = nombreGuardado;
      console.log(this.nombreUsuario);
      
      this.dialogos = [
        { personaje: 'sabio', mensaje: `¡Qué hay, gallo ${this.nombreUsuario}! Veo que pasaste con éxito el reto de condicionales. Te felicito.` },
        { personaje: 'sabio', mensaje: '¿Qué te pareció el acercamiento a la química? Te veo muy feliz.' },
        { personaje: 'gallo', mensaje: 'La verdad, me divirtió mucho, pude llenar el matraz y -aunque derramé un poco-, ¡creo que todo salió bien!' },
        { personaje: 'sabio', mensaje: '¡Me alegro! Recuerdo cuando hice mi primer experimento de química y... bueno, no salió tan bien como debería... je je.' },
        { personaje: 'sabio', mensaje: 'Pero no hablemos de eso ahora... Porque... ¿Estás listo para tu cuarto y último reto?' },
        { personaje: 'sabio', mensaje: `Esta vez conocerás las funciones, gallo ${this.nombreUsuario}. ¿Has escuchado hablar de ellas?` },
        { personaje: 'gallo', mensaje: 'Pues... recuerdo que alguna vez mi papá mencionó algo, pero la verdad no sé muy bien qué son.' },
        { personaje: 'sabio', mensaje: '¡No te preocupes! Mira, te lo pondré fácil. Imagina que las funciones son instrucciones que le das a alguien para que haga algo en específico.' },
        { personaje: 'sabio', mensaje: 'Por ejemplo, en una receta de cocina, cada paso es una "función", que describe lo que se tiene que hacer para llegar al resultado final.' },
        { personaje: 'gallo', mensaje: 'Entonces, ¿una función siempre hace lo mismo?' },
        { personaje: 'sabio', mensaje: 'Eh... algo así. Cada función cumple con su propósito específico.' },
        { personaje: 'sabio', mensaje: 'Se le da información, que le llamamos input, y esta hace su trabajo y devuelve un resultado, que es el output.' },
        { personaje: 'sabio', mensaje: 'Es como... ¿te gusta la comida?' },
        { personaje: 'gallo', mensaje: '¡Claro! Estoy comiendo todo el tiempo. Ja ja.' },
        { personaje: 'sabio', mensaje: 'Parece que estamos igual... ten cuidado con eso, también.' },
        { personaje: 'sabio', mensaje: 'Bueno, lo que importa... una función es como pedirle a un chef que prepare una comida.' },
        { personaje: 'sabio', mensaje: 'Le das los ingredientes y él te entrega el platillo terminado.' },
        { personaje: 'gallo', mensaje: '¡Creo que entiendo! Es como darle naranjas para que me dé un jugo, ¿no?' },
        { personaje: 'sabio', mensaje: `¡Exacto ${this.nombreUsuario}! Eso mismo lo aplicarás en el próximo reto, el cual también te servirá para conocer un poco sobre la carrera de psicología.` },
        { personaje: 'sabio', mensaje: 'Ahí, las funciones serán preguntas y respuestas que te ayudarán a conocerte un poco mejor a ti mismo.' },
        { personaje: 'gallo', mensaje: '¡Qué bien! ¿Cómo va a funcionar?' },
        { personaje: 'sabio', mensaje: 'No te preocupes, es un test de personalidad, seguro que has escuchado hablar de ellos.' },
        { personaje: 'gallo', mensaje: '¡Sí! Hasta algunos amigos estaban haciendo uno el otro día.' },
        { personaje: 'sabio', mensaje: '¡Perfecto! Solo son unas preguntas que, al contestarlas, le estarás dando inputs a la función...' },
        { personaje: 'sabio', mensaje: 'para que al final, te devuelva un output, con el resultado de tu personalidad.' },
        { personaje: 'sabio', mensaje: 'Así, al final, tendrás una idea de cómo es tu personalidad.' },
        { personaje: 'sabio', mensaje: 'Pero no te confíes, solo es un test. No es 100% verdadero lo que te salga.' },
        { personaje: 'gallo', mensaje: 'Entiendo, viejo Pablo. ¡Ya quiero probarlo!' },
        { personaje: 'sabio', mensaje: `¡Me alegra oírlo! Entonces, ${this.nombreUsuario}, cuando estés listo, pasemos al reto.` }
    ];
    
    }
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.handleKeydown.bind(this));
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.code === 'Space') {
      event.preventDefault(); // Evita el desplazamiento de la página con la tecla de espacio
      this.avanzarDialogo();
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
