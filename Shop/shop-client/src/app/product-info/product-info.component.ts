import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FavouritesService } from '../services/favourites.service';

@Component({
	selector: 'app-product-info',
	templateUrl: './product-info.component.html',
	styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
	
	public product: Product = new Product()
	private paramsMapSub: Subscription
	public quantity: number = 1

  	constructor (private productService: ProductService,
				 private cartService: CartService,
				 private favouritesService: FavouritesService,
				 private route: ActivatedRoute) {
		this.route.paramMap.subscribe(params => { 
			const pId = params.get('id')

			this.productService
				.getProductById(pId)
				.subscribe((product: Product) => this.product = product) 
		})
	}

	public decQuantity() {
		this.quantity -= 1
	}

	public incQuantity() {
		this.quantity += 1
	}

	public addToCart() {
		this.product.quantity = this.quantity
		this.quantity = 1
		this.cartService.addToCart(this.product)
	}

	public addToFavList() {
		this.favouritesService.addToFavList(this.product)
	}

	public removeFromFavList() {
		this.favouritesService.removeFromFavList(this.product._id)
	}

	public isInFavlist() {
		return this.favouritesService.isInFavList(this.product)
	}
}
