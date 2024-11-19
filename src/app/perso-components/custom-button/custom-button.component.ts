import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() label: string = '';
  @Input() height: string = '50px'; // Altura padrão
  @Input() width: string = '150px'; // Largura padrão
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }
}
