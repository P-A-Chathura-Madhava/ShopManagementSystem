import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../core/service/customer.service";
import {OrderService} from "../../../../core/service/order.service";

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {

  selectedCustomer: any = null;
  selectedItem: any = null;

  itemList: any[] = [];

  constructor(private _customerService: CustomerService, private _orderService: OrderService) { }

  ngOnInit(): void {
    this.loadAllCustomers();
    this.itemList = [
      {code: '1', description: 'Description 1', qtyOnHand: 50, unitPrice: 250},
      {code: '2', description: 'Description 2', qtyOnHand: 45, unitPrice: 345},
      {code: '3', description: 'Description 3', qtyOnHand: 65, unitPrice: 234},
      {code: '4', description: 'Description 4', qtyOnHand: 56, unitPrice: 324},
      {code: '5', description: 'Description 5', qtyOnHand: 46, unitPrice: 446}
    ];
    this.selectedItem = this.itemList[0];
  }

  customers: any[] = [];
  private loadAllCustomers() {
    this._customerService.getAllCustomers().subscribe(response => {
      this.customers = response.data;
      if (response.data.length>0){
        this.selectedCustomer = response.data[0];
      }
    }, error => {
      console.log(error);
    })
  }

  selectCustomer(value: string) {
    for (const temp of this.customers){
      if(value===temp.id){
        this.selectedCustomer = temp;
        return;
      }
    }
  }

  selectItem(value: string) {
    for (const temp of this.itemList){
      if(value===temp.code){
        this.selectedItem = temp;
        return;
      }
    }
  }

  cart: any[] = [];

  addToCart(value: string) {
    const selectedQty = Number(value);
    const tempUnitPrice = Number(this.selectedItem?.unitPrice);
    const total = selectedQty*tempUnitPrice;
    let temp = {
      itemCode: this.selectedItem?.code,
      description: this.selectedItem?.description,
      unitPrice: tempUnitPrice,
      qty: selectedQty,
      total: total
    }
    this.cart.push(temp);
    this.calculateTotalCost();
  }

  totalCost = 0.0;
  private calculateTotalCost() {
    this.totalCost = 0.0;
    for (const temp of this.cart){
      this.totalCost += temp.total;
    }
  }

  deleteFromCart(num: number) {
    this.cart.splice(num, 1);
    this.calculateTotalCost();
  }

  public placeOrder(){
    this._orderService.saveOrder(this.selectedCustomer, this.cart, this.totalCost).subscribe(response => {
      alert(response.message);
    }, error => {
      console.log(error);
    })
  }
}
