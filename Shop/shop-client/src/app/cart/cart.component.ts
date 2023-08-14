import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

	public items: Product[] = []
	public totalPrice:number = 0

	constructor (private cartService: CartService) {
		this.items = this.cartService.getitems()
		this.totalPrice = this.cartService.getTotalPrice()
	}


	public removeItem(itemName: string) {
		this.cartService.removeItem(itemName)
		this.items = this.cartService.getitems()
		this.totalPrice = this.cartService.getTotalPrice()
	}

	public clearCart() {
		this.items = []
		this.totalPrice = 0
		this.cartService.clearCart()
	}
}
