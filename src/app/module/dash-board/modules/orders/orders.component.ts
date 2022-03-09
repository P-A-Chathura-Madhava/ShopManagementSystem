import { Component, OnInit } from '@angular/core';
import {OrderService} from "../../../../core/service/order.service";
import {MatDialog} from "@angular/material/dialog";
import {DetailDialogComponent} from "./modal/detail-dialog/detail-dialog.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(private service: OrderService, private dialog: MatDialog) { }

  orders: any[] = [];

  ngOnInit(): void {
    this.service.getAllOrders().subscribe(response => {
      this.orders = response.data;
    }, error => {
      console.log(error);
    })
  }

  openOrderDetail(id: string, total: number, itemList: any) {
    this.dialog.open(DetailDialogComponent, {data: {
      customer: id,
      orderTotal: total,
      orderItems: itemList
    }});
  }
}
