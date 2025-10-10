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

  getCookie(name: string) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === name) {
        return value;
      }
    }
    return null;
  }

  setCookie(name: string, value: string) {
    const now = new Date();
    now.setTime(now.getTime() + (60 * 60 * 1000));

    const expires = "expires=" + now.toUTCString();

    document.cookie = `${name}=${value}; ${expires}; path=/; SameSite=Lax`;
  }

  ngOnInit(): void {
    if(!this.getCookie('accept_cookies'))
      this.openModal();
  }

  /**
   * Método para abrir el modal.
   */
  accept(): void {
    this.setCookie(`accept_cookies`, `true`);
    this.closeModal();
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
