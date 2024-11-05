
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Dialogo1Component } from '../dialogo1/dialogo1.component';

@Component({
  selector: 'app-nivel1',
  standalone: true,
  imports: [CommonModule, Dialogo1Component],
  templateUrl: './nivel1.component.html',
  styleUrls: ['./nivel1.component.css']
})
export class Nivel1Component {
  images = [
    { src: 'assets/0.png', id: '', container: '', on: false },
    { src: 'assets/1.png', id: '', container: '', on: false },
    { src: 'assets/2.png', id: '', container: '', on: false }
  ];
  message: string = '';
  vidas: number = 3;
  progress: number = 0;
  contenedores: number[] = [1, 2, 3];
  randomizedImages: any[] = [];
  randomizedContainers: number[] = [];
  win: boolean = false;
  mostrarDialogo: boolean = true;

  constructor() {
    this.reset();
  }

  // Método para ocultar el diálogo al finalizar
  ocultarDialogo(): void {
    this.mostrarDialogo = false;
  }

  // Método para aleatorizar imágenes y contenedores
  randomizeOrder() {
    // Genera un orden aleatorio para las imágenes y los contenedores
    this.randomizedImages = [...this.images].sort(() => Math.random() - 0.5);
    this.randomizedContainers = [...this.contenedores].sort(() => Math.random() - 0.5);
    console.log("Orden de imágenes:", this.randomizedImages.map(img => img.src));
    console.log("Orden de contenedores:", this.randomizedContainers);
  }

  // Método para asignar IDs y contenedores de las imágenes
  setValues() {
    for (let i = 0; i < this.randomizedImages.length; i++) {
      // Asigna IDs únicos de imagen y contenedor en base al orden aleatorio
      this.randomizedImages[i].id = `img${this.contenedores[i]}`;
      this.randomizedImages[i].container = `container${this.contenedores[i]}`;
    }
  }

  reset() {
    this.vidas = 3;
    this.progress = 0;
    this.win = false;
    this.message = '';
    this.images = [
      { src: 'assets/0.png', id: '', container: '', on: false },
      { src: 'assets/1.png', id: '', container: '', on: false },
      { src: 'assets/2.png', id: '', container: '', on: false }
    ];
    this.randomizeOrder();
    this.setValues();
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
          if (this.progress < 3) {
            this.message = `¡Bien hecho, sigue así!`;
          } else {
            this.message = `Felicidades, has completado el nivel.`;
            this.win = true;
          }
        } else {
          this.message = `Oh no, la imagen no va en ese contenedor.`;
          this.vidas--;
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
}