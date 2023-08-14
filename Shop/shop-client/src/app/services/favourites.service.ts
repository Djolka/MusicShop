import { EventEmitter, Injectable, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
	providedIn: 'root'
})
export class FavouritesService {

	public favList: Product[] = []
	@Output() favSize: EventEmitter<number> = new EventEmitter()

	constructor() {}

	public addToFavList (product: Product) {
		this.favList.push(product)
		this.favSize.emit(this.favList.length)
	}

	public getFavList() {
		return this.favList
	}
	
	public removeFromFavList(id: String) {
		this.favList = this.favList.filter((item) => item._id !== id)
		this.favSize.emit(this.favList.length)
	}

	public isInFavList(product: Product) {
		return this.favList.filter(item => product._id === item._id).length > 0
	}
}
