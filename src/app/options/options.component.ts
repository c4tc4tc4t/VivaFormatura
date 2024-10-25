import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {

  constructor(private router: Router) { }

  onGalleryClick() {
    console.log('Galeria clicado!');
    this.router.navigate(['/cards']);
  }

  onVivaClick() {
    console.log('Porque a Viva? clicado!');
    window.open('https://vivaeventos.com.br/por-que-a-viva/', '_blank');
  }

  goBack() {
    this.router.navigate(['/home']); // Navega para a tela 'home'
  }
}
