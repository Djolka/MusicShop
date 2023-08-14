import { Component } from '@angular/core';
import { FavouritesService } from '../services/favourites.service';
import { Product } from '../models/product.model';

@Component({
	selector: 'app-favourites',
	templateUrl: './favourites.component.html',
	styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent {

	public favList: Product[] = []

	constructor(private favouritesService: FavouritesService) {
		this.favList = this.favouritesService.getFavList()
	}

	public removeFromFavList(id: String) {
		this.favouritesService.removeFromFavList(id)
		this.favList = this.favouritesService.getFavList()
	}
}
