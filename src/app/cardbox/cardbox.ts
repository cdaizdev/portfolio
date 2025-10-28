import { CommonModule } from '@angular/common';
import { NgModule, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardbox',
  imports: [CommonModule],
  templateUrl: './cardbox.html'
})
export class CardBox {
  @Input() title: string = 'Nombre del usuario';
  @Input() position: string = 'Puesto de trabajo';
  @Input() contactDate: string = '10/12/2025';
  @Input() description: string = '10/12/2025';
  @Input() borderColor: string = '';

  get borderStyle(): string {
    return `border-l-4 ${this.borderColor}`;
  }
}