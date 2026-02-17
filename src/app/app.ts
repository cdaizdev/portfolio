import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Footer } from './components/layout/footer/footer';
import { ModalContainer } from './components/layout/modal-container/modal-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ModalContainer],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portfolio');

}
