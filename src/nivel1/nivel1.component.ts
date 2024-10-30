import { Component } from '@angular/core';

@Component({
  selector: 'app-nivel1',
  standalone: true,
  imports: [],
  templateUrl: './nivel1.component.html',
  styleUrl: './nivel1.component.css'
})
export class Nivel1Component {
  images = [
    { src: 'assets/0.png', id: '', container: '', on: false },
    { src: 'assets/1.png', id: '', container: '', on: false },
    { src: 'assets/2.png', id: '', container: '', on: false }
  ];
  message: string = '';
  vidas: number = 3;
  progress:number = 0;
  contenedores: number[] = [1, 2, 3];
  randomizedContainers: number[] = [];
  randomizedImages: any[] = [];
  win:boolean = false;

  constructor() {
    this.randomizeOrder();
    this.setValues();
  }

  onDragStart(event: DragEvent, imageId: string) {
    event.dataTransfer?.setData('text/plain', imageId);
  }

  randomizeOrder() {
    this.randomizedContainers = [...this.contenedores].sort(() => Math.random() - 0.5);
    this.randomizedImages = [...this.images].sort(() => Math.random() - 0.5);
  }

  setValues() {
    for (let i = 0; i < this.randomizedImages.length; i++) {
      this.randomizedImages[i].id = `img${this.randomizedContainers[i]}`;
      this.randomizedImages[i].container = `container${this.randomizedContainers[i]}`;
    }
  }
  
  reset(){
    this.vidas=3;
    this.progress=0;
    this.images = [
      { src: 'assets/0.png', id: '', container: '', on: false },
      { src: 'assets/1.png', id: '', container: '', on: false },
      { src: 'assets/2.png', id: '', container: '', on: false }
    ];
    this.randomizeOrder();
    this.setValues(); 
  }

  onDrop(event: DragEvent, containerId: string) {
    event.preventDefault();
    const imageId = event.dataTransfer?.getData('text');

    if (imageId) {
      const image = this.randomizedImages.find(img => img.id === imageId);

      if (!image?.on) {
        if (image?.container === containerId) {
          image.on = true;
          this.progress++;
          if(this.progress !=3)
            this.message = `¡Bien hecho, sigue así!`;
          else{
            this.message = `Felicidades has completado el nivel`;
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
