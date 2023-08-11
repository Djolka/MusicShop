import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
	selector: 'app-product-info',
	templateUrl: './product-info.component.html',
	styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
	
	public product: Product = new Product()
	public quantityNumber: number = 1
	private paramsMapSub: Subscription

  	constructor (private productService: ProductService,
				 private route: ActivatedRoute,
				 private cartService: CartService) {
		this.route.paramMap.subscribe(params => { 
			const pId = params.get('id')

			this.productService
				.getProductById(pId)
				.subscribe((product: Product) => this.product = product) 
		})
	}

	public decQuantity() {
		this.quantityNumber -= 1
	}

	public incQuantity() {
		this.quantityNumber += 1
	}

	public addToCart() {
		this.cartService.addToCart(this.product, this.quantityNumber)
	}


}
