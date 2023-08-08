import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
	selector: 'app-user-signup',
	templateUrl: './user-signup.component.html',
	styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit{

	private user: User
	public checkoutForm: FormGroup
	// public loggedIn: boolean

	constructor (private userService: UserService,
				 private formBuilder: FormBuilder,
				 private router: Router) {
		this.checkoutForm = this.formBuilder.group({
			name: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		})
	}

	ngOnInit(): void {}

	public name() {
		return this.checkoutForm.get('name')
	}

	public lastName() {
		return this.checkoutForm.get('lastName')
	}

	public email() {
		return this.checkoutForm.get('email')
	}

	public password() {
		return this.checkoutForm.get('password')
	}

	public submitForm(data: any) {
		this.userService.addUser(data)
		  	.subscribe((user: User) => {
				Swal.fire(
					'Welcome ' + user.name,
					'We are happy to see you :)!',
					'success'
				  )
				this.checkoutForm.reset()
				this.router.navigate(['/'])
		  	})
	}
}
