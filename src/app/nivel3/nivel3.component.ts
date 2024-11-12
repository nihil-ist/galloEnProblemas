import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dialogo3Component } from '../dialogo3/dialogo3.component';
import { RouterLink } from '@angular/router';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-nivel3',
  standalone: true,
  imports: [CommonModule, Dialogo3Component, RouterLink],
  templateUrl: './nivel3.component.html',
  styleUrl: './nivel3.component.css'
})
export class Nivel3Component {
  maxVolume = 30; 
  currentVolume = 0; 
  spillCleaned = true; 
  hasSyringe = false; 
  hasCloth = false; 
  message = '¡Empieza a llenar el matraz!'; 
  spilled = false;
  galloImage = 'assets/normal.png'; 
  flaskImage = 'assets/flask_0.png';  
  mostrarDialogo: boolean = true;
  showCongratulationsScreen = false; 

  constructor(private audioService: AudioService) {}
  
  ocultarDialogo(): void {
    this.mostrarDialogo = false;
  }
  takeSyringe() {
    this.hasSyringe = true;
    this.hasCloth = false;
    this.updateMessage('Tienes la jeringa en la mano. Puedes llenar el matraz.');
  }

  takeCloth() {
    this.hasCloth = true;
    this.hasSyringe = false;
    this.updateMessage('Tienes el trapo en la mano. Puedes limpiar el derrame si es necesario.');
  }

  fillFlask() {
    if (this.currentVolume < this.maxVolume && this.spillCleaned && this.hasSyringe) {
      this.currentVolume += 10;

      if (this.currentVolume === 20 && !this.spilled) {
        this.currentVolume -= 10; 
        this.spilled = true;
        this.spillCleaned = false;
        this.updateMessage('¡El líquido se ha derramado! Debes limpiarlo antes de continuar.');
        this.audioService.playSound('assets/sounds/hit.mp3');
        this.flaskImage = 'assets/flask_spilled.png'; // Imagen del matraz con derrame
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
      this.audioService.playSound('assets/sounds/yay.mp3');
      this.updateMessage('¡El matraz está completamente lleno!');

      setTimeout(() => {
        this.showCongratulationsScreen = true;
        this.audioService.playSound('assets/sounds/yay.mp3');
        this.completeLevel();
      }, 3000);

    }

    if (this.spillCleaned) {
      if (this.currentVolume === 10) {
        this.flaskImage = 'assets/flask_10.png';
      } else if (this.currentVolume === 20) {
        this.flaskImage = 'assets/flask_20.png';
      } else if (this.currentVolume === 30) {
        this.flaskImage = 'assets/flask_30.png';
      }
    }

  } 

  cleanSpill() {
    if (!this.spillCleaned && this.hasCloth) {
      this.spillCleaned = true;
      this.galloImage = 'assets/normal.png';
      this.flaskImage = 'assets/flask_10.png';
      this.updateMessage('El derrame ha sido limpiado. Puedes continuar llenando el matraz.');
    } else if (!this.hasCloth) {
      this.updateMessage('Necesitas el trapo para limpiar el derrame.');
    }
  }

  reset() {
    this.currentVolume = 0;
    this.spillCleaned = true;
    this.hasSyringe = false;
    this.hasCloth = false;
    this.message = '¡Empieza a llenar el matraz!';
    this.spilled = false;
    this.galloImage = 'assets/normal.png';
    this.showCongratulationsScreen = false; 
    this.flaskImage = 'assets/flask_0.png';  
  }

  private updateMessage(newMessage: string) {
    this.message = newMessage;
  }

  completeLevel(): void {
    localStorage.setItem('currentLevel', "4");
  }
}
