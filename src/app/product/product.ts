import { Component } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule, DecimalPipe],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  products = [
    { id: 1, name: 'Power Espresso', price: 81.90, imageUrl: 'images/desktop/cafetera_cecotec.png', description: 'Cafetera Express Manual de 850W, Presión 20 Bares, Depósito de 1,5L, Brazo Doble Salida, Vaporizador, Superficie Calientatazas, Acabados en Acero Inoxidable' },
    { id: 2, name: 'Philips EP2224/10', price: 309.98, imageUrl: 'images/desktop/cafetera_philips.webp', description: 'Philips EP2224/10 Cafetera Espresso Automática 15 Bares Negra'},
    { id: 3, name: 'Baresto Mattina', price: 2439.59, imageUrl: 'images/desktop/cafetera_barista.webp', description: 'Baristeo Mattina 2x Cafetera espresso barista' },
    { id: 4, name: 'Lavavasos Industrial Cleiton', price: 990.00, imageUrl: 'images/desktop/lavavajillas.jpg', description: 'Lavavasos Industrial para Hostelería con cesta de 40x40cm.' },
    { id: 5, name: 'Conjunto 4 sillas + mesa', price: 178.90, imageUrl: 'images/desktop/sillas.jpg', description: 'Conjunto CAFFE mesa fija y 4 sillas de cocina'}
  ];
}
