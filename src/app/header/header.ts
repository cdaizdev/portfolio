import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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
