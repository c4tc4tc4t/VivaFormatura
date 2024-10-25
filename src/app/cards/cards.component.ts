import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  constructor(private router: Router) { }

  cards = [
    { image: 'assets/fotos/heber-davis-OWz1mcjdoKQ-unsplash.jpg', title: 'Card 1', collection: 'colecao-um' },
    { image: 'assets/fotos/rocky-xiong-wyY4Jj2_CEo-unsplash.jpg', title: 'Card 2', collection: 'colecao-dois' },
    { image: 'assets/fotos/tilak-baloni-g-UErVX8jb0-unsplash.jpg', title: 'Card 3', collection: 'colecao-tres' },
    { image: 'assets/fotos/willian-justen-de-vasconcellos-gNZz9w4UnmQ-unsplash.jpg', title: 'Card 4', collection: 'colecao-quatro' }
  ];

  onCardClick(collection: string) {
    this.router.navigate(['/galeria', collection]); // Navega para a galeria com a coleção como parâmetro
  }

  goBack() {
    this.router.navigate(['/options']); // Navega de volta para o componente Options
  }
}
