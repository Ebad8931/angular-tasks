import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simple-cart.component.html',
  styleUrl: './simple-cart.component.scss'
})
export class SimpleCartComponent {

  quantity: number = 0;

  pricePerItem: number = 100;

  get totalPrice(): number {
    return this.quantity * this.pricePerItem
  }
}
