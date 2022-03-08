import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../../../../../core/service/customer.service";
import {ItemService} from "../../../../../../core/service/item.service";

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  searchItemForm = new FormGroup({
    code: new FormControl('', Validators.required)
  })

  constructor(private service: ItemService) { }

  ngOnInit(): void {
  }

  selectedItem: any = null;

  searchData() {
    this.service.searchItem(this.searchItemForm.get('code')?.value).subscribe(response => {
      this.selectedItem = response.data;
    }, error => {
      console.log(error);
    })
  }

}
