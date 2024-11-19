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
    { image: 'assets/fotos/_ CAPA_DSC0856.JPG', title: 'Baile', collection: 'Baile' },
    { image: 'assets/fotos/_DSC9463.JPG', title: 'Direito', collection: 'Direito' },
    { image: 'assets/fotos/0JBO5638.JPG', title: 'Medicina', collection: 'Medicina' },
    { image: 'assets/fotos/1  DSC08399.jpg', title: 'Odonto', collection: 'Odonto' }
  ];

  onCardClick(collection: string) {
    this.router.navigate(['/galeria', collection]); // Navega para a galeria com a coleção como parâmetro
  }

  goBack() {
    this.router.navigate(['/options']); // Navega de volta para o componente Options
  }
}
