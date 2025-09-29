import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
})
export class Header {
  public isMobileMenuOpen = false;
  
  constructor(private cartService: CartService) {}

  openCart() {
    this.cartService.openCart();
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
