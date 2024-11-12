import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ButtonSoundService } from '../button-sound.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private buttonSoundService: ButtonSoundService) {}

  playButtonSound(): void {
    this.buttonSoundService.playSound();
  }
}
