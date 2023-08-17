import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FavouritesService } from '../services/favourites.service';
import Swal  from 'sweetalert2';

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
		Swal.fire(
			'You have logged out',
			'Log in if you want to buy products or save your favourites',
			'success'
		)
		this.router.navigate(['/'])
	}

	ngOnInit(): void {
		this.userService.log.subscribe(login => {
			this.loggedIn = login
			if(this.loggedIn === false) {
				this.favouritesService.clear()
			} else {
				this.favouritesService.getFavList(this.userService.get_id()).subscribe(items => {
					this.favSize = items.length
				})
			}
		})
		this.cartService.itemsSize.subscribe(size => {
			this.itemsSize = size
		})
		
		this.favouritesService.favSize.subscribe(size => {
			this.favSize = size
		}) 
	}

}
