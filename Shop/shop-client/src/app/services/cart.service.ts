import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { HttpErrorHandler } from './http-error-handler.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class CartService extends HttpErrorHandler {

	private items: Product[] = []
	private readonly ordersUrl = 'http://localhost:3000/cart/'
	public quantityNumber: number

	constructor(private http: HttpClient, router: Router) {
		super(router)
	}

	public addToCart(product: Product, quantityNumber: number) {
		this.items.push(product)
		this.quantityNumber = quantityNumber
	}

	public getitems(): Product[] {
		return this.items
	}

	public getTotalPrice(): number {
		return this.items.map(item => item.price).reduceRight((price, sum) => price+sum, 0)
	}

	public removeItem(itemName:string):void {
		console.log('druga pre', this.items.length)
		this.items = this.items.filter((item) => item.name!==itemName)
		console.log('druga posle', this.items.length)
	}

	public clearCart(): Product[] {
		this.items = []
		return this.items
	}

	// public createAnOrder(formData: any): Observable<Order> { // kada kreiramo porudzbinu, vraca se informacija o toj porudzbini
	// 	const body = {
	// 		...formData,
	// 		products: this.items
	// 	};
	// 	return this.http.post<Order>(this.ordersUrl, body).pipe(
	// 		catchError(super.handleError())
	// 	); 
	// }
}
