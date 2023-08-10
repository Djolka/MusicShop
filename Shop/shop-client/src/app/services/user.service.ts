import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorHandler } from './http-error-handler.model';
import { Observable, Subject, Subscription, catchError, of} from 'rxjs';
import { User } from '../models/user.model'



@Injectable({
    providedIn: 'root'
})
export class UserService extends HttpErrorHandler {

	public userId: string
	public userInfo: User
	userChange: Subject<User> = new Subject<User>()
	private user: Observable<User>

	public loggedIn: boolean
	loggedInChange : Subject<boolean> = new Subject<boolean>()
	subscribe: Subscription;

    constructor(private http: HttpClient, router: Router) {
    	super(router)
    }


	// log info
	changeLoggedInInfo() {
        this.loggedIn = !this.loggedIn 
        this.loggedInChange.next(this.loggedIn); 
    }

	//propagation
	changeUserInfo(user: User) {
		this.userChange.next(this.userInfo) 
	}

	getLoggedValue(): Observable<boolean> {
        return this.loggedInChange.asObservable();
    }

	getUserInfo(): User {
		return this.userInfo
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

		this.user.subscribe((user: User) => {
			this.userInfo = user
		})


		this.user.subscribe(value => {
			this.userId = value._id
		});
		
		return this.user
	}

	public getUserByEmailAndPassword (formData: any):Observable<User> { //login
		const body = {
			...formData
		}
		this.user = this.http.post<User>('http://localhost:3000/login/', body)
					.pipe(catchError(super.handleError()))
		
		this.user.subscribe((user:User) => {
			this.userInfo = user
		})

		return this.user
	}

	public updateUser (formData: User): Observable<User>{ // profile settings
		const body = {
			...formData
		}
		console.log('http://localhost:3000/profile/' + this.userId)
		this.user = this.http.put<User>('http://localhost:3000/profile/'+this.userId, body)
		this.user.subscribe(value => this.userInfo = value)
						
		return this.user
	}

	public getUserById(): Observable<User> {
		console.log(this.userId)
		return this.http.get<User>('http://localhost:3000/profile/'+this.userId)
	}

	public logOut () { 
		this.userInfo = undefined 
	}
	
}
