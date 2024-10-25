import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  @Input() label: string = ''; // Define o rótulo do botão
  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit(); // Emite o evento de clique
  }
}
