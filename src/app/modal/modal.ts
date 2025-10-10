import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal {
  @Input() visible = false;

  constructor() { }

  /**
   * Método para abrir el modal.
   */
  open(): void {
    this.visible = true;
  }

  /**
   * Método para cerrar el modal.
   */
  close() {
    this.visible = false;
  }

  /**
   * Método para cerrar el modal al hacer click fuera del contenido (en el overlay/fondo).
   * @param event El evento del click.
   */
  closeModalOnOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.getAttribute('data-action') === 'modal-overlay') {
      this.close();
    }
  }
}
