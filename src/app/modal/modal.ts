import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css'
})
export class Modal implements OnInit {
  public isModalOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.openModal();
  }

  /**
   * Método para abrir el modal.
   */
  openModal(): void {
    this.isModalOpen = true;
  }

  /**
   * Método para cerrar el modal.
   */
  closeModal(): void {
    this.isModalOpen = false;
  }

  /**
   * Método para cerrar el modal al hacer click fuera del contenido (en el overlay/fondo).
   * @param event El evento del click.
   */
  closeModalOnOutsideClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (target.classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
