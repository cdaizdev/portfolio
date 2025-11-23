import { Component } from '@angular/core';
import { CardBox } from '../cardbox/cardbox';

@Component({
  selector: 'app-manager',
  imports: [CardBox],
  standalone: true,
  templateUrl: './manager.html'
})
export class Manager {

}
