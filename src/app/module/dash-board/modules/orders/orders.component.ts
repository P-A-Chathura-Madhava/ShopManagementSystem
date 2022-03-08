import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../../core/service/order.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private service: OrderService) { }

  orders: any[] = [];

  ngOnInit(): void {
    this.service.getAllOrders().subscribe(response => {
      this.orders = response.data;
    }, error => {
      console.log(error);
    })
  }
}
