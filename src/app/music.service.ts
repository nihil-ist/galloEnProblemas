import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private audio: HTMLAudioElement;
  private isMutedd: boolean = true; 

  constructor() {
    this.audio = new Audio();
    this.audio.src = 'assets/music/bgMusic.mp3';
    this.audio.loop = true;
    this.audio.volume = 0.5;
    this.audio.muted = true; 
  }

  playMusic(): void {
    if (this.audio.paused) {
      this.audio.play();
    }
  }

  stopMusic(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  muteMusic(): void {
    this.audio.muted = true;
    this.isMutedd = true;
  }

  unmuteMusic(): void {
    if (this.audio.volume === 0) {
      this.setVolume(0.5);
    }
    this.audio.muted = false;
    this.isMutedd = false;
  }

  isMuted(): boolean {
    return this.isMutedd;
  }

  setVolume(volume: number): void {
    this.audio.volume = volume;
  }

  isPlaying(): boolean {
    return !this.audio.paused; 
  }

  getVolume(): number {
    return this.audio.volume;
  }
}
