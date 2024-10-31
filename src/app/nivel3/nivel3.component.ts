import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dialogo3Component } from '../dialogo3/dialogo3.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nivel3',
  standalone: true,
  imports: [CommonModule, Dialogo3Component, RouterLink],
  templateUrl: './nivel3.component.html',
  styleUrl: './nivel3.component.css'
})
export class Nivel3Component {
  maxVolume = 30; // Capacidad máxima del matraz en ml
  currentVolume = 0; // Volumen actual en el matraz
  spillCleaned = true; // Indica si el derrame ha sido limpiado
  hasSyringe = false; // Indica si el usuario tiene la jeringa en mano
  hasCloth = false; // Indica si el usuario tiene el trapo en mano
  message = ''; 
  spilled = false;
  galloImage = 'assets/normal.png'; // Imagen actual del gallo
  mostrarDialogo: boolean = true;
  showCongratulationsScreen = false; // Controla si se muestra la pantalla de felicitación

  // Método para ocultar el diálogo al finalizar
  ocultarDialogo(): void {
    this.mostrarDialogo = false;
  }
  // Método para tomar la jeringa
  takeSyringe() {
    this.hasSyringe = true;
    this.hasCloth = false;
    this.updateMessage('Tienes la jeringa en la mano. Puedes llenar el matraz.');
  }

  // Método para tomar el trapo
  takeCloth() {
    this.hasCloth = true;
    this.hasSyringe = false;
    this.updateMessage('Tienes el trapo en la mano. Puedes limpiar el derrame si es necesario.');
  }

  // Método para llenar el matraz
  fillFlask() {
    if (this.currentVolume < this.maxVolume && this.spillCleaned && this.hasSyringe) {
      this.currentVolume += 10;

      if (this.currentVolume === 20 && !this.spilled) {
        this.currentVolume -= 10; // Reviértelo debido al derrame
        this.spilled = true;
        this.spillCleaned = false;
        this.updateMessage('¡El líquido se ha derramado! Debes limpiarlo antes de continuar.');
        this.galloImage = 'assets/sad.png';

      } else {
        this.updateMessage(`Matraz llenado con ${this.currentVolume} ml. Sigue llenando.`);
      }
    } else if (!this.spillCleaned) {
      this.updateMessage('Debes limpiar el derrame antes de continuar.');
    } else if (!this.hasSyringe) {
      this.updateMessage('Necesitas la jeringa para llenar el matraz.');
    }
    
    if (this.currentVolume >= this.maxVolume) {
      this.galloImage = 'assets/happy.png';
      this.updateMessage('¡El matraz está completamente lleno!');

      setTimeout(() => {
        this.showCongratulationsScreen = true;
      }, 3000);

    }
  } 

  // Método para limpiar el derrame
  cleanSpill() {
    if (!this.spillCleaned && this.hasCloth) {
      this.spillCleaned = true;
      // this.spilled = true; // Permite seguir llenando el matraz
      this.galloImage = 'assets/normal.png';
      this.updateMessage('El derrame ha sido limpiado. Puedes continuar llenando el matraz.');
    } else if (!this.hasCloth) {
      this.updateMessage('Necesitas el trapo para limpiar el derrame.');
    }
  }

  // Reinicia el estado del juego
  reset() {
    this.currentVolume = 0;
    this.spillCleaned = true;
    this.hasSyringe = false;
    this.hasCloth = false;
    this.message = '';
    this.spilled = false;
    this.galloImage = 'assets/normal.png';
    this.showCongratulationsScreen = false; // Oculta la pantalla de felicitación
  }

  // Actualiza el mensaje y mantiene la consistencia
  private updateMessage(newMessage: string) {
    this.message = newMessage;
  }
}