import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { DetailDialogComponent } from './modal/detail-dialog/detail-dialog.component';


@NgModule({
  declarations: [
    OrdersComponent,
    DetailDialogComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule
  ]
})
export class OrdersModule { }
