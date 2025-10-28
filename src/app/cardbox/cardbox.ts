import { CommonModule } from '@angular/common';
import { NgModule, Component, Input } from '@angular/core';

@Component({
  selector: 'app-cardbox',
  imports: [CommonModule],
  templateUrl: './cardbox.html'
})
export class TarjetaComponent {
  @Input() titulo: string = 'Título por defecto';
  @Input() contenido: string = 'Contenido de la tarjeta';
  @Input() colorBorde: string = 'green-400';

  get borderStyle(): string {
    return `border-l-4 border-${this.colorBorde}`;
  }
}