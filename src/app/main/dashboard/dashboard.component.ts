import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { OrderService } from '../../lib/order.service';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";
import { BaseComponent } from 'src/app/lib/base-component';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  b: any; a0: any;
  c: any; b0: any;
  a: any; c0: any;
  d: any; d0: any;
  e: any; e0: any;
  f: any; f0: any;

  totalMoney: any; percentMoney: any;
  totalQty: any; percentQty: any;
  totalOdr: any; percentOder: any;

  month0: any;
  month1: any;
  month2: any;
  month3: any;
  month4: any;
  month5: any;
  key: any;
  value: any;
  statistical: any;
  constructor(private _order: OrderService, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._order.Get().subscribe((res) => {

      this.value = Object.values(res);

      this.a = this.value[0][0]; this.a0 = this.value[1][0];
      this.b = this.value[0][1]; this.b0 = this.value[1][1];
      this.c = this.value[0][2]; this.c0 = this.value[1][2];
      this.d = this.value[0][3]; this.d0 = this.value[1][3];
      this.e = this.value[0][4]; this.e0 = this.value[1][4];
      this.f = this.value[0][5]; this.f0 = this.value[1][5];

      this.totalQty = this.value[2];
      this.percentQty = this.value[3];
      this.totalOdr = this.value[4];
      this.percentOder = this.value[5];
      this.totalMoney = this.value[6];
      this.percentMoney = this.value[7];
      

      this.chartOptions = {
        series: [
          {
            name: "Đơn hàng",
            data: [this.a, this.b, this.c, this.d, this.e, this.f]
          },
          {
            name: "Tổng tiền",
            data: [this.a0, this.b0, this.c0, this.d0, this.e0, this.f0]
          }
        ],
        chart: {
          height: 450,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {

          type: "datetime",

          categories: [
            this.month5,
            this.month4,
            this.month3,
            this.month2,
            this.month1,
            this.month0
          ]
        },
        tooltip: {
          x: {
            format: "MM/yyyy"
          }
        }
      };

    })


    var d = new Date();
    var curr_month = d.getMonth();
    var curr_year = d.getFullYear()
    var months = new Array("Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul", "Aug", "Sep",
      "Oct", "Nov", "Dec");
      
      
    switch (curr_month) {
      case 0:
        this.month5 = months[curr_month + 7] + "-" + (curr_year - 1);
        this.month4 = months[curr_month + 8] + "-" + (curr_year - 1);
        this.month3 = months[curr_month + 9] + "-" + (curr_year - 1);
        this.month2 = months[curr_month + 10] + "-" + (curr_year - 1);
        this.month1 = months[curr_month + 11] + "-" + (curr_year - 1);
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 1:
        this.month5 = months[curr_month + 8] + "-" + (curr_year - 1);
        this.month4 = months[curr_month + 9] + "-" + (curr_year - 1);
        this.month3 = months[curr_month + 10] + "-" + (curr_year - 1);
        this.month2 = months[curr_month + 11] + "-" + (curr_year - 1);
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 2:
        this.month5 = months[curr_month + 9] + "-" + (curr_year - 1);
        this.month4 = months[curr_month + 10] + "-" + (curr_year - 1);
        this.month3 = months[curr_month + 11] + "-" + (curr_year - 1);
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 3:
        this.month5 = months[curr_month + 10] + "-" + (curr_year - 1);
        this.month4 = months[curr_month + 11] + "-" + (curr_year - 1);
        this.month3 = months[curr_month - 3] + "-" + curr_year;
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 4:
        this.month5 = months[curr_month + 11] + "-" + (curr_year - 1);
        this.month4 = months[curr_month - 4] + "-" + curr_year;
        this.month3 = months[curr_month - 3] + "-" + curr_year;
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 5:
        this.month5 = months[curr_month - 5] + "-" + curr_year;
        this.month4 = months[curr_month - 4] + "-" + curr_year;
        this.month3 = months[curr_month - 3] + "-" + curr_year;
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 6:
        this.month5 = months[curr_month - 5] + "-" + curr_year;
        this.month4 = months[curr_month - 4] + "-" + curr_year;
        this.month3 = months[curr_month - 3] + "-" + curr_year;
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 7:
        this.month5 = months[curr_month - 5] + "-" + curr_year;
        this.month4 = months[curr_month - 4] + "-" + curr_year;
        this.month3 = months[curr_month - 3] + "-" + curr_year;
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 8:
        this.month5 = months[curr_month - 5] + "-" + curr_year;
        this.month4 = months[curr_month - 4] + "-" + curr_year;
        this.month3 = months[curr_month - 3] + "-" + curr_year;
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 9:
        this.month5 = months[curr_month - 5] + "-" + curr_year;
        this.month4 = months[curr_month - 4] + "-" + curr_year;
        this.month3 = months[curr_month - 3] + "-" + curr_year;
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 10:
        this.month5 = months[curr_month - 5] + "-" + curr_year;
        this.month4 = months[curr_month - 4] + "-" + curr_year;
        this.month3 = months[curr_month - 3] + "-" + curr_year;
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;
      case 11:
        this.month5 = months[curr_month - 5] + "-" + curr_year;
        this.month4 = months[curr_month - 4] + "-" + curr_year;
        this.month3 = months[curr_month - 3] + "-" + curr_year;
        this.month2 = months[curr_month - 2] + "-" + curr_year;
        this.month1 = months[curr_month - 1] + "-" + curr_year;
        this.month0 = months[curr_month] + "-" + curr_year;
        break;

      default:
        break;
    }



  }
  
  ngAfterViewInit() {
    this.loadScripts();
  }

}
