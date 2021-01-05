import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OderComponent } from './oder/oder.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

export const route:Routes = [
  {
    path:':id',
    component: OderComponent,
  },
  {
    path:'orderdetail/:id',
    component:OrderdetailComponent,
  }
]

@NgModule({
  declarations: [OderComponent, OrderdetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    HttpClientModule,
    FormsModule,
    // NgbPaginationModule
  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class OrderModule { }
