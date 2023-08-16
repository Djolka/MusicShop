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

	public onChange(event: any) {
		switch(event.target.value) {
			case 'priceLH':{
				console.log('priceLH')
				break
			}
			case 'priceHL':{
				console.log('priceHL')
				break
			}
			case 'nameAZ':{
				console.log('nameAZ')
				break
			}
			case 'nameZA':{
				console.log('nameZA')
				break
			}
			case 'brandAZ':{
				console.log('brandAZ')
				break
			}
			case 'brandZA':{
				console.log('brandZA')
				break
			}
		}
	}
}
