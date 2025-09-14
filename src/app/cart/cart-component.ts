// cart-panel.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-cart-panel',
  templateUrl: './cart-component.html',
  standalone: true,
  imports: [CommonModule]
})
export class CartComponent implements OnInit {
  isCartOpen = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.isCartOpen$.subscribe(open => {
      this.isCartOpen = open;
    });
  }

  closeCart() {
    this.cartService.closeCart();
  }
}
