import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../../core/service/customer.service";
import CustomerDTO from "../../../../../../core/model/CustomerDTO";
import {ItemService} from "../../../../../../core/service/item.service";
import ItemDTO from "../../../../../../core/model/ItemDTO";

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  updateItemForm = new FormGroup({
    code: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    unitPrice: new FormControl('', Validators.required),
    qtyOnHand: new FormControl('', Validators.required)
  })

  constructor(private service: ItemService) { }

  ngOnInit(): void {
  }

  updateData() {
    let dto = new ItemDTO(
      this.updateItemForm.get('code')?.value,
      this.updateItemForm.get('description')?.value,
      this.updateItemForm.get('unitPrice')?.value,
      this.updateItemForm.get('qtyOnHand')?.value
    )
    this.service.updateItem(dto).subscribe(response => {
      alert(response.message);
    }, error => {
      console.log(error);
    })
  }

}
