import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Observable, map } from 'rxjs';
import { Filter } from '../models/filter.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent {

	public products: Observable<Product[]>

	public filterTags: Filter = new Filter() 

	constructor(private productService: ProductService) {
		this.products = this.productService.getProducts()
	}


	public applyFilter(id: keyof Filter, event: any) {
		
		if(event.target.checked === true) {
			this.filterTags.changeValue(id, 1)
			this.products = this.productService.filterProducts(this.filterTags)
		} else {
			this.filterTags.changeValue(id, 0)
			this.products = this.productService.filterProducts(this.filterTags)
		}

		if(this.filterTags.areAllUnchecked()) {
			this.products = this.productService.getProducts()
			return
		}
	}

	public onChange(event: any) {
		switch (event.target.value) {
			case 'priceLH': {
				this.products = this.products.pipe(map((data) => {
					data.sort((a, b) => {
						return a.price < b.price ? -1 : 1;
					});
					return data;
				}))
				break
			}
			case 'priceHL': {
				this.products = this.products.pipe(map((data) => {
					data.sort((a, b) => {
						return a.price > b.price ? -1 : 1;
					});
					return data;
				}))
				break
			}
			case 'nameAZ': {
				this.products = this.products.pipe(map((data) => {
					data.sort((a, b) => {
						return a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase() ? -1 : 1;
					});
					return data;
				}))
				break
			}
			case 'nameZA': {
				this.products = this.products.pipe(map((data) => {
					data.sort((a, b) => {
						return a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? -1 : 1;
					});
					return data;
				}))
				break
			}
			case 'brandAZ': {
				this.products = this.products.pipe(map((data) => {
					data.sort((a, b) => {
						return a.manufacturer.toLocaleLowerCase() < b.manufacturer.toLocaleLowerCase() ? -1 : 1;
					});
					return data;
				}))
				break
			}
			case 'brandZA': {
				this.products = this.products.pipe(map((data) => {
					data.sort((a, b) => {
						return a.manufacturer.toLocaleLowerCase() > b.manufacturer.toLocaleLowerCase() ? -1 : 1;
					});
					return data;
				}))
				break
			}
		}
	}
}
