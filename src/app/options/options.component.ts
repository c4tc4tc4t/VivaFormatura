import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  showDialog: boolean = false;
  qrCodeUrl: string = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://vivaeventos.com.br/por-que-a-viva/';

  constructor(private router: Router) { }

  ngAfterViewInit() {
    if (this.videoElement) {
      this.videoElement.nativeElement.muted = true;
      this.videoElement.nativeElement.volume = 0; // Define o volume como zero para garantir
    }
  }

  onGalleryClick() {
    this.router.navigate(['/cards']);
  }

  goBack() {
    this.router.navigate(['/home']);
  }

}
