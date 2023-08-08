import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user.model';
// import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

	public user: User
	public checkoutForm: FormGroup

	constructor(private userService: UserService,
				private formBuilder: FormBuilder) {
		// this.user = this.userService.getUser().subscribe((user:User) => this.user = user)
		this.checkoutForm = this.formBuilder.group({
			name: ['', [Validators.required]],
			lastName: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required]]
		})
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
				// this.router.navigate(['/'])
			})
	}
}
