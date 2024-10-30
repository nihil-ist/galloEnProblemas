import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel3',
  standalone: true,
  imports: [],
  templateUrl: './nivel3.component.html',
  styleUrl: './nivel3.component.css'
})
export class Nivel3Component {
  maxVolume = 50; // Capacidad máxima del matraz en ml
  currentVolume = 0; // Volumen actual en el matraz
  spillCleaned = true; // Indica si el derrame ha sido limpiado
  hasSyringe = false; // Indica si el usuario tiene la jeringa en mano
  hasCloth = false; // Indica si el usuario tiene el trapo en mano
  message = ''; 

  // Método para tomar la jeringa
  takeSyringe() {
    this.hasSyringe = true;
    this.hasCloth = false;
    this.message = 'Tienes la jeringa en la mano. Puedes llenar el matraz.';
  }

  // Método para tomar el trapo
  takeCloth() {
    this.hasCloth = true;
    this.hasSyringe = false;
    this.message = 'Tienes el trapo en la mano. Puedes limpiar el derrame si es necesario.';
  }

  // Método para llenar el matraz
  fillFlask() {
    if (this.currentVolume < this.maxVolume && this.spillCleaned && this.hasSyringe) {
      this.currentVolume += 10;

      if (this.currentVolume === 30) {
        this.message = '¡El líquido se ha derramado! Debes limpiarlo antes de continuar.';
        this.spillCleaned = false; // Bloquea el llenado hasta que se limpie
      } else {
        this.message = `Matraz llenado con ${this.currentVolume} ml. Sigue llenando.`;
      }
    } else if (!this.spillCleaned) {
      this.message = 'Debes limpiar el derrame antes de continuar.';
    } else if (!this.hasSyringe) {
      this.message = 'Necesitas la jeringa para llenar el matraz.';
    } else if (this.currentVolume >= this.maxVolume) {
      this.message = '¡El matraz está completamente lleno!';
    }
  }

  // Método para limpiar el derrame
  cleanSpill() {
    if (!this.spillCleaned && this.hasCloth) {
      this.spillCleaned = true; // Permite seguir llenando el matraz
      this.message = 'El derrame ha sido limpiado. Puedes continuar llenando el matraz.';
    } else if (!this.hasCloth) {
      this.message = 'Necesitas el trapo para limpiar el derrame.';
    }
  }

  // Reinicia el estado del juego
  reset() {
    this.currentVolume = 0;
    this.spillCleaned = true;
    this.hasSyringe = false;
    this.hasCloth = false;
    this.message = '';
  }
}
