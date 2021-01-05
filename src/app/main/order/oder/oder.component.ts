import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { OrderService } from 'src/app/lib/order.service';

@Component({
  selector: 'app-oder',
  templateUrl: './oder.component.html',
  styleUrls: ['./oder.component.css']
})
export class OderComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _order: OrderService) { }
  list: any;
  page: any;
  pageSize: any;
  item_group_id: any;
  totalItems: any;
  status:any;
  ngOnInit(): void {

    this.list = [];
    this.page = 1;
    this.pageSize = 10;
    this._route.params.subscribe(params => {
      this.item_group_id = params['id'];
      this._order.post('/GetOrders', { page: this.page, pageSize: this.pageSize, item_group_id: this.item_group_id })
        .subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;

        }, err => { });
    });
  }
  loadPage(page){
    this._route.params.subscribe(params => {
      let id = params['id'];
      this._order.post('/GetOrders', { page: this.page, pageSize: this.pageSize, item_group_id: this.item_group_id })
        .subscribe(res => {
          this.list = res.data;
          this.totalItems = res.totalItems;

        }, err => { });
    });
  }

}
