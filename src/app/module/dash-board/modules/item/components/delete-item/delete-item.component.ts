import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../../core/service/customer.service";
import {ItemService} from "../../../../../../core/service/item.service";

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss']
})
export class DeleteItemComponent implements OnInit {

  deleteItemForm = new FormGroup({
    code: new FormControl('', Validators.required)
  })

  constructor(private service: ItemService) { }

  ngOnInit(): void {
  }

  deleteData() {
    this.service.deleteItem(this.deleteItemForm.get('code')?.value).subscribe(response => {
      alert(response.message);
    }, error => {
      console.log(error);
    })
  }

}
