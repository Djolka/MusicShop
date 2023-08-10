import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { countries } from "countries-list";
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

	public user: User = new User()
	public checkoutForm: FormGroup
	subscription: Subscription

	constructor(private userService: UserService,
				private formBuilder: FormBuilder,
				private route: ActivatedRoute,
				private router: Router) {
		this.refreshUser()
		this.checkoutForm = this.formBuilder.group({
			name: [this.user.name, [Validators.required]],
			lastName: [this.user.lastName, [Validators.required]],
			email: [this.user.email, [Validators.required, Validators.email]],
			password: [this.user.password, []],
			country: [this.user.country, []],
			phoneNumber: [this.user.phoneNumber, []],
			address: [this.user.address, []]
		})
		console.log(this.user)
  	}

	refreshUser() {
		this.user = this.userService.getUserInfo()
	}


	public submitForm(data: any) {
		console.log(data)
		this.userService.updateUser(data)
			.subscribe((user: User) => {
				Swal.fire(
					'Successfully updated your informations',
					'We are happy to see you :)!',
					'success'
				)
			})
		this.router.navigate(['/'])
	}
}
