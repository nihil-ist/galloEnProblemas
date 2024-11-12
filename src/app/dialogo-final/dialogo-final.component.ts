import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialogo-final',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogo-final.component.html',
  styleUrl: './dialogo-final.component.css'
})
export class DialogoFinalComponent {
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
        { personaje: 'gallo', mensaje: '¡Hola, viejo Pablo! ¡He completado todos los retos! Me siento listo para enfrentar cualquier cosa en el futuro.' },
        { personaje: 'sabio', mensaje: `¡Increíble, gallo ${this.nombreUsuario}! Has hecho un gran trabajo` },
        { personaje: 'sabio', mensaje: `Has aprendido conceptos fundamentales para cualquier carrera, en especial tecnológica` },
        { personaje: 'gallo', mensaje: '¡Sí! Ahora entiendo mucho más sobre programación, y gracias a ti, he aprendido a aplicarlo a diferentes situaciones.' },
        { personaje: 'sabio', mensaje: 'He de admitir que eres igual de bueno que tu padre, Guillermo. Llegarás muy lejos.' },
        { personaje: 'sabio', mensaje: 'La programación es solo una herramienta; lo importante es cómo la usas para resolver problemas y crear algo útil.' },
        { personaje: 'gallo', mensaje: 'Lo recordaré siempre, Pablo. ¿Sabe? Creo que ya estoy listo para elegir mi carrera. ¡Quiero estudiar algo relacionado con tecnología!' },
        { personaje: 'sabio', mensaje: `¡Esa es una excelente decisión, ${this.nombreUsuario}! No importa qué camino elijas, lo importante es que lo hagas con pasión y dedicación.` },
        { personaje: 'sabio', mensaje: 'Y recuerda, la programación no es solo una profesión, es una forma de pensar y resolver problemas que puedes aplicar en cualquier ámbito de la vida.' },
        { personaje: 'gallo', mensaje: '¡Gracias por todo, viejo Pablo! Nunca olvidaré lo que me enseñaste. ¡Eres el mentor que siempre quise tener!' },
        { personaje: 'sabio', mensaje: 'El placer ha sido mío, joven gallo. Y recuerda, siempre que necesites ayuda, solo busca en tu corazón el deseo de aprender y experimentar.' },
        { personaje: 'gallo', mensaje: '¡Hasta pronto, Pablo! ¡Voy a conquistar el mundo de la programación!' },
        { personaje: 'sabio', mensaje: '¡Buena suerte en tu viaje, gallo valiente! Sé que lograrás grandes cosas.' },
        { personaje: 'gallo', mensaje: '¡Hasta pronto, Pablo! ¡Voy a conquistar el mundo de la programación!' },
        { personaje: 'sabio', mensaje: '¡Buena suerte en tu viaje, gallo valiente! Sé que lograrás grandes cosas.' },
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
