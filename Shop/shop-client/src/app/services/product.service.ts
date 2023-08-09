import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HttpErrorHandler } from './http-error-handler.model';


@Injectable({
  providedIn: 'root'
})

export class ProductService extends HttpErrorHandler{

	private products: Observable<Product[]>;
	private readonly productstUrl = 'http://localhost:3000/';

	constructor(private http: HttpClient, router: Router) { 
		super(router)
		this.loadProducts();
	}

	private loadProducts(): Observable<Product[]> {
		this.products = this.http.get<Product[]>(this.productstUrl).pipe(
			catchError(super.handleError())
		)
		return this.products
	}

	public getProducts(): Observable<Product[]> {
		return this.products
	}

	public getProductById(id: string): Observable<Product> {
		return this.http.get<Product>(this.productstUrl + id).pipe(
			catchError(super.handleError())
		);
	}
}
