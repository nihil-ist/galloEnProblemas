import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Nivel1Component } from "../nivel1/nivel1.component";
import { Nivel3Component } from "./nivel3/nivel3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, Nivel1Component, Nivel3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoServicio';
}
