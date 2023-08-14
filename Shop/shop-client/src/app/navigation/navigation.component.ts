import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FavouritesService } from '../services/favourites.service';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit{

	public loggedIn: boolean = false
	public itemsSize: number = 0
	public favSize: number = 0

	constructor (private userService: UserService,
				 private favouritesService: FavouritesService,
				 private cartService: CartService,		 
				 private router: Router) {
		if(this.userService.get_id() === undefined) {
			this.loggedIn = true
		}
	}

	public logout() {
		this.loggedIn = false
		this.userService.logOut()
		this.router.navigate(['/'])
	}

	ngOnInit(): void {
		this.userService.log.subscribe(login => {
			this.loggedIn = login
		})
		this.cartService.itemsSize.subscribe(size => {
			this.itemsSize = size
		})
		
		this.favouritesService.favSize.subscribe(size => {
			this.favSize = size
		}) 
	}
}
