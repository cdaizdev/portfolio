import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  isLiked: boolean = false;

  likeColor: string = '#db8310ff';

  /**
   * Cambia el estado del corazón (vacío/lleno) al hacer clic.
   */
  toggleLike(): void {
    this.isLiked = !this.isLiked;
  }
}
