
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() data: any;
  isLiked: boolean = false;

  likeColor: string = '#db8310ff';

  /**
   * Cambia el estado del corazón (vacío/lleno) al hacer clic.
   */
  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }
}
