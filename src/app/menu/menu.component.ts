import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
