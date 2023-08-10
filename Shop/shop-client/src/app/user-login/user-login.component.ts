import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { throwError, catchError } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent  implements OnInit {

    // private user: User
	public checkoutForm: FormGroup

	constructor (private userService: UserService,
				 private formBuilder: FormBuilder,
				 private router: Router) {
		this.checkoutForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		})
	}

	ngOnInit(): void {}

	changeLoggedInfo() {
		this.userService.changeLoggedInInfo()
	}

	public email() {
		return this.checkoutForm.get('email')
	}

	public password() {
		return this.checkoutForm.get('password')
	}

	// TOFIX: handling error 
	public submitForm(data: any) {
		this.userService.getUserByEmailAndPassword(data)
		  	.subscribe((user: User) => {
				Swal.fire(
					'Welcome back ' + user.name,
					'We are happy to see you :)!',
					'success'
				)
				this.checkoutForm.reset()
				this.router.navigate(['/'])
		  	},
			  (error: any) => {
				Swal.fire(
				  'Error',
				  'Invalid email or password. Please try again.',
				  'error'
				);
			  }
			)
	}
}
