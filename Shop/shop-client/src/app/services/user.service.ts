import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorHandler } from './http-error-handler.model';
import { Observable, Subject, catchError} from 'rxjs';
import { User } from '../models/user.model'



@Injectable({
    providedIn: 'root'
})
export class UserService extends HttpErrorHandler {

	private user: Observable<User>

	public loggedIn: boolean
	loggedInChange : Subject<boolean> = new Subject<boolean>()

    constructor(private http: HttpClient, router: Router) {
    	super(router)
		// this.loggedInChange.subscribe((value) => {
		// 	this.loggedIn = value
		// })
    }

	changeLoggedInInfo() {
        this.loggedIn = !this.loggedIn
        this.loggedInChange.next(this.loggedIn);
    }
	getLoggedValue(): Observable<boolean> {
        return this.loggedInChange.asObservable();
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
