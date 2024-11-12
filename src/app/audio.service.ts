import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audio = new Audio();

  constructor() {}

  playSound(src: string) {
    this.audio.src = src;
    this.audio.load();
    this.audio.play();
  }
}
