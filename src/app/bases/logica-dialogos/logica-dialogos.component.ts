import { Component } from '@angular/core';

@Component({
  selector: 'app-logica-dialogos',
  standalone: true,
  imports: [],
  templateUrl: './logica-dialogos.component.html',
  styleUrl: './logica-dialogos.component.css'
})
export class LogicaDialogosComponent {
  dialogos: string[] = [
    'Texto hola hola hola hola hola hola hola hola hola',
    'Texto 2 hola hola ',
    'Texto 3 hola',
    'Texto 4 hola hola hola'
  ];
  dialogoActual: number = 0;
  avanzarDialogo(): void {
    if (this.dialogoActual < this.dialogos.length - 1) {
      this.dialogoActual++;
    }
  } 
}
