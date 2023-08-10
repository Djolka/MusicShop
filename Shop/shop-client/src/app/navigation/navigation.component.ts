import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy{

	public loggedIn: boolean
	subscription: Subscription

	constructor (private userService: UserService) {
		this.subscription = this.userService.getLoggedValue().subscribe((value) => {
			this.loggedIn = value
		})
	}

	changeLoggedInfo() {
		this.userService.changeLoggedInInfo()
	}

	ngOnDestroy() {
        this.subscription.unsubscribe();
    }

	ngOnInit(): void {}
}
