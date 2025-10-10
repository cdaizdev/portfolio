import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cookie-modal',
  imports: [],
  templateUrl: './cookie-modal.html'
})
export class CookieModal {
  @Output() acceptEmmiter = new EventEmitter<void>();
  @Output() rejectEmmiter = new EventEmitter<void>();

  constructor() { }

  accept() {
    alert("Has aceptado las cookies");
    this.acceptEmmiter.emit();
  }

  reject() {
    alert("Has rechazado las cookies");
    this.rejectEmmiter.emit();
  }

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
}
