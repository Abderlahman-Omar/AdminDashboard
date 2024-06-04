import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexDataLabels,
  ApexTheme,
  ApexYAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { OrdersService } from '../../../../services/Orders.service';
import { Order } from '../../../../Interfaces/Order';
@Component({
  selector: 'app-three-dimensions',
  templateUrl: './three-dimensions.component.html',
  styleUrl: './three-dimensions.component.css',
})
export class ThreeDimensionsComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  yaxis!: ApexYAxis;
  title!: ApexTitleSubtitle;
  subtitle!: ApexTitleSubtitle;

  fill!: ApexFill;
  tooltip!: ApexTooltip;
  dataLabels!: ApexDataLabels;
  theme!: ApexTheme;
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
        name: 'Product1',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Product2',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Product3',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Product4',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
    ]),
      (this.chart = {
        height: 350,
        type: 'bubble',
      }),
      (this.dataLabels = {
        enabled: false,
      }),
      (this.fill = {
        type: 'gradient',
      }),
      (this.title = {
        text: `${this.orderList.length}`,
        style: {
          fontSize: '20px',
        },
      }),
      (this.subtitle = {
        text: 'Total Orders',
        style: {
          fontSize: '14px',
        },
      }),
      (this.xaxis = {
        tickAmount: 12,
        type: 'datetime',
        labels: {
          rotate: 0,
        },
      }),
      (this.yaxis = {
        max: 70,
      }),
      (this.theme = {
        palette: 'palette2',
      });
  }
  public generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      //var x =Math.floor(Math.random() * (750 - 1 + 1)) + 1;;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([baseval, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
