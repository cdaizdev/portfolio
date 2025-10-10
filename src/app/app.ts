import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ModalContainer } from './modal-container/modal-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ModalContainer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');

}
