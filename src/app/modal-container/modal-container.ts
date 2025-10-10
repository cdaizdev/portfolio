import { Component } from '@angular/core';
import { Modal } from '../modal/modal';
import { CookieModal } from '../cookie-modal/cookie-modal';

@Component({
  selector: 'app-modal-container',
  imports: [Modal, CookieModal],
  templateUrl: './modal-container.html'
})
export class ModalContainer {
  modal = true;

  openModal() {
    this.modal = true;
  }
  closeModal() {
    this.modal = false;
  }
}
