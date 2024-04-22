import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis,
} from 'ng-apexcharts';
import { Order } from '../../../../Interfaces/Order';
import { OrdersService } from '../../../../services/Orders.service';
@Component({
  selector: 'app-line-column',
  templateUrl: './line-column.component.html',
  styleUrl: './line-column.component.css',
})
export class LineColumnComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  yaxis!: ApexYAxis | ApexYAxis[];
  title!: ApexTitleSubtitle;
  subtitle!: ApexTitleSubtitle;
  labels!: string[];
  stroke!: any; // ApexStroke;
  dataLabels!: any; // ApexDataLabels;
  fill!: ApexFill;
  tooltip!: ApexTooltip;
  orderList: Order[] = [];
  lastOrder: any;
  confirmedOrders: string[] = [];
  shippedOrders: string[] = [];
  unconfirmedOrders: string[] = [];
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    this.updateLocalData();
  }

  async updateLocalData() {
    const { ordersData, error } = await this.ordersService.getAllOrders();
    if (ordersData) {
      this.orderList = ordersData;
      if (this.orderList.length > 0) {
        this.lastOrder = this.orderList[this.orderList.length - 1].createdAt;
      } else {
        this.lastOrder = 'No orders available';
      }
      // console.log(this.lastOrder);
      // console.log(this.orderList);
      this.orderList.map((order) => {
        // console.log(order.status);
        if (order.status === 'Confirmed') {
          // console.log(order.status);
          this.confirmedOrders.push(order.status);
          // console.log(this.confirmedOrders);
        }
        if (order.status === 'Shipped') {
          // console.log(order.status);
          this.shippedOrders.push(order.status);
          // console.log(this.shippedOrders);
        }
        if (order.status === 'Unconfirmed') {
          // console.log(order.status);
          this.unconfirmedOrders.push(order.status);
          // console.log(this.unconfirmedOrders);
        }
      });

      this.initializeChartOptions();
    } else if (error) {
      console.error('Failed to fetch orders:', error);
    }
  }
  private initializeChartOptions(): void {
    (this.series = [
      {
        name: 'Website Blog',
        type: 'column',
        data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
      },
      {
        name: 'Social Media',
        type: 'line',
        data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
      },
    ]),
      (this.chart = {
        height: 350,
        type: 'line',
      }),
      (this.stroke = {
        width: [0, 4],
      }),
      (this.title = {
        text: `${this.confirmedOrders.length}`,
      }),
      (this.subtitle = {
        text: 'Total Confirmed Orders',
      }),
      (this.dataLabels = {
        enabled: true,
        enabledOnSeries: [1],
      }),
      (this.labels = [
        '01 Jan 2001',
        '02 Jan 2001',
        '03 Jan 2001',
        '04 Jan 2001',
        '05 Jan 2001',
        '06 Jan 2001',
        '07 Jan 2001',
        '08 Jan 2001',
        '09 Jan 2001',
        '10 Jan 2001',
        '11 Jan 2001',
        '12 Jan 2001',
      ]),
      (this.xaxis = {
        type: 'datetime',
      }),
      (this.yaxis = [
        {
          title: {
            text: 'Website Blog',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Social Media',
          },
        },
      ]);
  }
}
