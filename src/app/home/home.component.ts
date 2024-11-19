import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    const video = this.videoElement.nativeElement;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;

    video.play().catch(error => {
      console.error('Erro ao tentar reproduzir o vídeo:', error);
    });
  }

  onScreenClick() {
    this.router.navigate(['/options']);
    console.log('Clique detectado - navegando para a próxima tela');
  }
}
