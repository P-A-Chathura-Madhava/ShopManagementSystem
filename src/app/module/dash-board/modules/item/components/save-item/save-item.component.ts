import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ItemService} from "../../../../../../core/service/item.service";
import ItemDTO from "../../../../../../core/model/ItemDTO";

@Component({
  selector: 'app-save-item',
  templateUrl: './save-item.component.html',
  styleUrls: ['./save-item.component.scss']
})
export class SaveItemComponent implements OnInit {

  saveItemForm = new FormGroup({
    code: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    unitPrice: new FormControl('', Validators.required),
    qtyOnHand: new FormControl('', Validators.required)
  })

  constructor(private service: ItemService) { }

  ngOnInit(): void {
  }

  saveData() {
    let dto = new ItemDTO(
      this.saveItemForm.get('code')?.value,
      this.saveItemForm.get('description')?.value,
      this.saveItemForm.get('unitPrice')?.value,
      this.saveItemForm.get('qtyOnHand')?.value
    )
    this.service.saveItem(dto).subscribe(response => {
      alert(response.message);
    }, error => {
      console.log(error);
    })
  }

}
