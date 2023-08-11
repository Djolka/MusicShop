import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorHandler } from './http-error-handler.model';
import { Observable, Subject, Subscription, catchError} from 'rxjs';
import { User } from '../models/user.model'



@Injectable({
    providedIn: 'root'
})
export class UserService extends HttpErrorHandler {

	@Output() log: EventEmitter<any> = new EventEmitter()

	public userInfo: User
	private user: Observable<User>

    constructor(private http: HttpClient, router: Router) {
    	super(router)
    }

	public addUserLocalStorage (user: User) {
		localStorage.setItem("userId", user._id)
		localStorage.setItem("email", user.email)
		this.log.emit(true)
	}

	public get_id () {
		return localStorage.getItem("userId")
	}

	public addUser (formData: any): Observable<User> { // signup
		const body = {
			...formData
		}
		
		this.user = this.http.post<User>('http://localhost:3000/signup/', body)
					.pipe(catchError(super.handleError()))
		
		return this.user
	}

	public getUserByEmailAndPassword (formData: any):Observable<User> { //login
		const body = {
			...formData
		}
		this.user = this.http.post<User>('http://localhost:3000/login/', body)
		return this.user
	}

	public updateUser (formData: User): Observable<User>{ // profile settings
		const body = {
			...formData
		}
		this.user = this.http.put<User>('http://localhost:3000/users/' + this.get_id(), body)
						
		return this.user
	}

	public getUserById(): Observable<User> {
		return this.http.get<User>('http://localhost:3000/users/' + this.get_id())
	}

	public logOut () { 
		localStorage.clear()
		this.log.emit(false)
	}
	
}
