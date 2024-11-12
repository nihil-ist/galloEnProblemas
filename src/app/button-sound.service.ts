import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ButtonSoundService {
  private audio = new Audio();

  constructor() {
    // Puedes configurar la ruta del sonido aquí
    this.audio.src = 'assets/sounds/button-click.mp3';
    this.audio.load();
  }

  playSound() {
    this.audio.currentTime = 0; // Reinicia el sonido para que suene cada vez que se presione
    this.audio.play();
  }
}
