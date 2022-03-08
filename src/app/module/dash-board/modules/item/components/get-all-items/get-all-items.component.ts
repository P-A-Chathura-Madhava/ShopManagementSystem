import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../../../../../core/service/customer.service";
import {ItemService} from "../../../../../../core/service/item.service";

@Component({
  selector: 'app-get-all-items',
  templateUrl: './get-all-items.component.html',
  styleUrls: ['./get-all-items.component.scss']
})
export class GetAllItemsComponent implements OnInit {

  constructor(private service: ItemService) { }

  items: any[] = [];

  ngOnInit(): void {
    this.service.getAllItems().subscribe(response => {
      this.items = response.data;
    }, error => {
      console.log(error);
    })
  }

}
