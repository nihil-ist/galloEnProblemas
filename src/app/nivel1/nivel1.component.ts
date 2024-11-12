import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dialogo1Component } from '../dialogo1/dialogo1.component';
import { RouterModule } from '@angular/router';
import { AudioService } from '../audio.service';

@Component({
  selector: 'app-nivel1',
  standalone: true,
  imports: [CommonModule, Dialogo1Component, RouterModule],
  templateUrl: './nivel1.component.html',
  styleUrls: ['./nivel1.component.css']
})
export class Nivel1Component {
  images = [
    { src: 'assets/0.png', id: 'img1', container: 'container1', on: false },
    { src: 'assets/1.png', id: 'img2', container: 'container2', on: false },
    { src: 'assets/2.png', id: 'img3', container: 'container3', on: false }
  ];
  message: string = '';
  vidas: number = 3;
  progress: number = 0;
  contenedores: number[] = [1, 2, 3];
  randomizedImages: any[] = [];
  win: boolean = false;
  galloImagen: string = 'assets/normal.png';
  mostrarDialogo: boolean = true;

  constructor(private audioService: AudioService) {
    this.reset();
  }

  ocultarDialogo(): void {
    this.mostrarDialogo = false;
  }

  randomizeOrder() {
    this.randomizedImages = [...this.images].sort(() => Math.random() - 0.5);
  }



  reset() {
    this.vidas = 3;
    this.progress = 0;
    this.win = false;
    this.message = '';
    this.images = [
      { src: 'assets/0.png', id: 'img1', container: 'container1', on: false },
      { src: 'assets/1.png', id: 'img2', container: 'container2', on: false },
      { src: 'assets/2.png', id: 'img3', container: 'container3', on: false }
    ];
    this.randomizeOrder();
  }

  onDragStart(event: DragEvent, imageId: string) {
    event.dataTransfer?.setData('text/plain', imageId);
  }

  onDrop(event: DragEvent, containerId: string) {
    event.preventDefault();
    const imageId = event.dataTransfer?.getData('text');

    if (imageId) {
      const image = this.randomizedImages.find(img => img.id === imageId);

      if (image && !image.on) {
        if (image.container === containerId) {
          image.on = true;
          this.progress++;
          if (this.progress < this.randomizedImages.length) {
            this.message = `¡Bien hecho, sigue así!`;
            this.galloImagen = 'assets/happy.png';
            this.audioService.playSound('assets/sounds/yay.mp3');
            setTimeout(() => {
              this.galloImagen = 'assets/normal.png';
            }, 1000);
          } else {
            this.win = true;
            this.completeLevel();
            this.audioService.playSound('assets/sounds/yay.mp3');
            this.galloImagen = 'assets/happy.png'
          }
        } else {
          this.message = `Oh no, la imagen no va en ese contenedor.`;
          this.vidas--;
          this.audioService.playSound('assets/sounds/hit.mp3');
          this.galloImagen = 'assets/sad.png';
          setTimeout(() => {
            this.galloImagen = 'assets/normal.png';
          }, 1000);
          if (this.vidas === 0) {
            this.message = `Vuelve a intentarlo.`;
          }
        }
      }
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

completeLevel(): void {
  localStorage.setItem('currentLevel', "2");
}

}
