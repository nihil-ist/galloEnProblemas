import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, RouterOutlet, NavigationEnd } from '@angular/router';
import { MusicService } from './music.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

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
  private routeSub: Subscription = new Subscription;

  constructor(private musicService: MusicService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.musicService.playMusic();

    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects; // Obtiene la ruta actual
      }
    });
  }

  ngOnDestroy(): void {
    // Limpia la suscripción para evitar fugas de memoria
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }

  mute(): void {
    this.musicService.muteMusic();
  }

  unmute(): void {
    this.musicService.unmuteMusic();
  }

  isMuted(): boolean {
    return this.musicService.isMuted();
  }

  goToMenu(): void {
    this.router.navigate(['/menu']); // Redirige al usuario a la página /menu
  }

  

  
}
