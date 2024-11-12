import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { MusicService } from './music.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ButtonSoundService } from './button-sound.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'proyectoServicio';
  currentRoute: string = '';
  private routeSub: Subscription = new Subscription();

  private clickListener: () => void;

  constructor(private musicService: MusicService, private router: Router, private route: ActivatedRoute, private buttonSoundService: ButtonSoundService, private renderer: Renderer2) {
    this.clickListener = this.renderer.listen('document', 'click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        this.buttonSoundService.playSound();
      }
    });
  }

  ngOnInit(): void {
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
    if (this.clickListener) {
      this.clickListener();
    }
  }

  mute(): void {
    this.musicService.muteMusic();
  }

  unmute(): void {
    if (this.musicService.isMuted()) {
      this.musicService.unmuteMusic();
      if (this.musicService.isPlaying() === false) {
        this.musicService.playMusic(); 
      }
    }
  }

  isMuted(): boolean {
    return this.musicService.isMuted();
  }

  goToMenu(): void {
    this.router.navigate(['/menu']);
  }

  playButtonSound(): void {
    this.buttonSoundService.playSound();
  }
  
}
