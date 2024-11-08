import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audio: HTMLAudioElement;
  private muted: boolean = false;
  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/music/bgMusic.mp3'; // Reemplaza con la ruta de tu archivo de música
    this.audio.loop = true; // Hacer que la música se repita en bucle
    this.audio.volume = 0.5; // Ajusta el volumen si lo deseas
  }

  playMusic(): void {
    if (this.audio.paused) {
      this.audio.play();
    }
  }

  stopMusic(): void {
    this.audio.pause();
    this.audio.currentTime = 0; // Reinicia la música al inicio
  }

  isPlaying(): boolean {
    return !this.audio.paused;
  }

  
  muteMusic(): void {
    this.audio.muted = true;
    this.muted = true; // Mutea la música
  }

  unmuteMusic(): void {
    if (this.audio.volume === 0) {
      this.setVolume(0.5);  // Ajusta el volumen a 0.5 si está en 0
    }
    this.audio.muted = false;
    this.muted = false;
  }

  isMuted(): boolean {
    if (this.audio.muted || this.audio.volume == 0) 
      return true;
    else
      return false
    
  }

  setVolume(volume: number): void {
    this.audio.volume = volume;
  }

  getVolume(): number {
    return this.audio.volume;
  }
}
