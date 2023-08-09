import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
	public products: Observable<Product[]>

  	constructor (private productService: ProductService) {
		this.products = this.productService.getProducts()
	}

	
}
