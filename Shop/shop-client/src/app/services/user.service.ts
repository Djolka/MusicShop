import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorHandler } from './http-error-handler.model';
import { BehaviorSubject, Observable, catchError, of } from 'rxjs';
import { User } from '../models/user.model'



@Injectable({
    providedIn: 'root'
})
export class UserService extends HttpErrorHandler {

	private user: Observable<User>
	public loggedIn: boolean = false

    constructor(private http: HttpClient, router: Router) {
    	super(router)
    }

	public getCurrentUserInfo (): Observable<User> {
		return this.user
	}

	public addUser (formData: any): Observable<User> { // signup
		const body = {
			...formData
		}
		
		this.user = this.http.post<User>('http://localhost:3000/signup/', body)
					.pipe(catchError(super.handleError()))
		
		// console.log(this.loggedIn)
		return this.user
	}

	public getUserByEmailAndPassword (formData: any):Observable<User> { //login
		const body = {
			...formData
		}
		this.user = this.http.post<User>('http://localhost:3000/login/', body)
					.pipe(catchError(super.handleError()))
		

		return this.user
	}

	public updateUser () { // profile settings

	}

	public logOut () { // logout -> delete all infos from 'user'

	}

	public getUser(): Observable<User> {
		return this.user
	}
	
}
