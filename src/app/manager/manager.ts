import { Component } from '@angular/core';
import { CardBox } from '../cardbox/cardbox';
import { Soundmeter } from '../soundmeter/soundmeter';

@Component({
  selector: 'app-manager',
  imports: [CardBox, Soundmeter],
  standalone: true,
  templateUrl: './manager.html'
})
export class Manager {

}
