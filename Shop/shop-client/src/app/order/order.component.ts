import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';
import { UserService } from '../services/user.service';
import { format } from 'date-fns';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

	public ordersList: Order[] = []

	constructor (private orderService: OrderService,
				 private userService: UserService) {
		
	}

	ngOnInit(): void {
		this.orderService.getOrdersByCustomerID(this.userService.get_id()).subscribe(list => {
			this.ordersList = list
		})
	}
}
