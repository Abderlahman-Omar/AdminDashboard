import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis,
} from 'ng-apexcharts';
import { OrdersService } from '../../../../services/Orders.service';
import { Order } from '../../../../Interfaces/Order';
const sparkLineData = [
  47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61,
  27, 54, 43, 19, 46,
];
@Component({
  selector: 'app-spark-lines',
  templateUrl: './spark-lines.component.html',
  styleUrl: './spark-lines.component.css',
})
export class SparkLinesComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  markers!: any; //ApexMarkers;
  stroke!: any; //ApexStroke;
  yaxis!: ApexYAxis | ApexYAxis[];
  plotOptions!: ApexPlotOptions;
  dataLabels!: ApexDataLabels;
  colors!: string[];
  labels!: string[] | number[];
  title!: ApexTitleSubtitle;
  subtitle!: ApexTitleSubtitle;
  legend!: ApexLegend;
  fill!: ApexFill;
  tooltip!: ApexTooltip;
  text: any = 'Hello';
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
        name: 'chart-big-sparkline',
        data: this.randomizeArray(sparkLineData),
      },
    ]),
      (this.chart = {
        type: 'area',
        height: 320,
        sparkline: {
          enabled: true,
        },
      }),
      (this.stroke = {
        curve: 'straight',
      }),
      (this.fill = {
        opacity: 0.3,
      }),
      (this.yaxis = [
        {
          min: 0,
        },
      ]),
      (this.title = {
        text: `Confirmed Orders : ${this.confirmedOrders.length} 
       

        `,
        // text: `Shipped Orders : ${this.shippedOrders.length}`,
        // text: `Confirmed Orders : ${this.confirmedOrders.length}`,
        // text: 'Last Order Created',
        // text: '$135,965',
        offsetX: 0,
        style: {
          fontSize: '20px',
        },
      }),
      ((this.subtitle = {
        // text: this.confirmedOrders.length,
        text: this.lastOrder,
        offsetX: 0,
        style: {
          fontSize: '14px',
        },
      }),
      (this.tooltip = {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== 'undefined') {
              return y.toFixed(0) + ' points';
            }
            return y;
          },
        },
      }));
  }
  public randomizeArray(arg: any): number[] {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
