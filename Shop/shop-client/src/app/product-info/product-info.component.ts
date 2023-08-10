import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-product-info',
	templateUrl: './product-info.component.html',
	styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent {
	
	public product: Product
	private paramsMapSub: Subscription


  	constructor (private productService: ProductService,
				 private route: ActivatedRoute) {
		
		this.route.paramMap.subscribe(params => { 
				const pId = params.get('id')

				this.productService
					.getProductById(pId)
					.subscribe((product: Product) => this.product = product) 
    	})
	}
}
