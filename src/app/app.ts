import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CartComponent } from './cart/cart-component';
import { Modal } from './modal/modal';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, CartComponent, Modal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
