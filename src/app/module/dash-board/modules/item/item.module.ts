import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';
import { SaveItemComponent } from './components/save-item/save-item.component';
import { DeleteItemComponent } from './components/delete-item/delete-item.component';
import { UpdateItemComponent } from './components/update-item/update-item.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { GetAllItemsComponent } from './components/get-all-items/get-all-items.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    ItemComponent,
    SaveItemComponent,
    DeleteItemComponent,
    UpdateItemComponent,
    SearchItemComponent,
    GetAllItemsComponent
  ],
    imports: [
        CommonModule,
        ItemRoutingModule,
        MatTabsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatPaginatorModule
    ]
})
export class ItemModule { }
