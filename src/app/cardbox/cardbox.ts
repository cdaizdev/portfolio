import { CommonModule } from '@angular/common';
import { NgModule, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardbox',
  imports: [CommonModule],
  templateUrl: './cardbox.html'
})
export class CardBox {
  @Input() titulo: string = 'Título por defecto';
  @Input() contenido: string = 'Contenido de la tarjeta';
  @Input() borderColor: string = '';

  get borderStyle(): string {
    return `border-l-4 ${this.borderColor}`;
  }
}