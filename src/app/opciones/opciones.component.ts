import { Component } from '@angular/core';
import { MusicService } from '../music.service';
@Component({
  selector: 'app-opciones',
  standalone: true,
  imports: [],
  templateUrl: './opciones.component.html',
  styleUrl: './opciones.component.css'
})
export class OpcionesComponent {
  currentVolume: number;

  constructor(private musicService: MusicService) {
    this.currentVolume = this.musicService.getVolume();
  }

  changeVolume(event: any): void {
    const volume = event.target.value;
    this.musicService.setVolume(volume);
    this.currentVolume = volume;
  }

}
