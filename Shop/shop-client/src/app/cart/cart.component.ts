import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

	public user: User = new User()
	public items: Product[] = []
	public totalPrice:number = 0
	public checkoutForm: FormGroup

	constructor (private cartService: CartService,
				 private userService: UserService,
				 private formBuilder: FormBuilder) {
		this.refreshUser()
		this.items = this.cartService.getitems()
		this.totalPrice = this.cartService.getTotalPrice()
		this.checkoutForm = this.formBuilder.group({
			name: [this.user.name, [Validators.required]],
			lastName: [this.user.lastName, [Validators.required]],
			phoneNumber: [this.user.phoneNumber, [Validators.required]],
			address: [this.user.address, [Validators.required]],
			country: [this.user.country, [Validators.required]],
			email: [this.user.email, [Validators.required, Validators.email]]
		})
	}

	refreshUser() {
		this.userService.getUserById().subscribe((user:User) => {
			this.user = user
		})
	}

	public removeItem(id: string) {
		this.cartService.removeItem(id)
		this.items = this.cartService.getitems()
		this.totalPrice = this.cartService.getTotalPrice()
	}

	public clearCart() {
		this.items = []
		this.totalPrice = 0
		this.cartService.clearCart()
	}
}
