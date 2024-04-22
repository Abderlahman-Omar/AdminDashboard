import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexMarkers,
  ApexXAxis,
  ApexPlotOptions,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { Seller } from '../../../../Interfaces/Seller';
import { SellersService } from '../../../../services/Sellers.service';
@Component({
  selector: 'app-line-column-area',
  templateUrl: './line-column-area.component.html',
  styleUrl: './line-column-area.component.css',
})
export class LineColumnAreaComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  yaxis!: ApexYAxis | ApexYAxis[];
  labels!: string[];
  stroke: any; // ApexStroke;
  markers!: ApexMarkers;
  plotOptions!: ApexPlotOptions;
  fill!: ApexFill;
  tooltip!: ApexTooltip;
  title!: ApexTitleSubtitle;
  subtitle!: ApexTitleSubtitle;
  sellersList: Seller[] = [];
  topSellers: Seller[] = [];
  constructor(private sellersService: SellersService) {}
  ngOnInit(): void {
    this.updateLocalData();
  }
  async updateLocalData() {
    const { sellerData, error } = await this.sellersService.getAllSellers();
    if (sellerData) {
      this.sellersList = sellerData;
      // console.log(this.sellersList);

      this.sellersList.map((seller) => {
        if (seller.rate === 5) {
          this.topSellers.push(seller);
        }
      });
      console.log(this.topSellers);

      this.initializeChartOptions();
    }
  }
  private initializeChartOptions(): void {
    (this.series = [
      {
        name: 'TEAM A',
        type: 'column',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
      },
      {
        name: 'TEAM B',
        type: 'area',
        data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
      },
      {
        name: 'TEAM C',
        type: 'line',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
      },
    ]),
      (this.chart = {
        height: 350,
        type: 'line',
        stacked: false,
      }),
      (this.stroke = {
        width: [0, 2, 5],
        curve: 'smooth',
      }),
      (this.plotOptions = {
        bar: {
          columnWidth: '50%',
        },
      }),
      (this.fill = {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: 'vertical',
          opacityFrom: 0.85,
          opacityTo: 0.55,
          // stops: [0, 100, 100, 100]
        },
      }),
      (this.title = {
        text: `${this.topSellers[0].title}
       

        `,

        offsetX: 0,
        style: {
          fontSize: '20px',
        },
      }),
      (this.subtitle = {
        // text: this.confirmedOrders.length,
        text: ' Overall Top Seller',
        offsetX: 0,
        style: {
          fontSize: '14px',
        },
      }),
      (this.labels = [
        '01/01/2003',
        '02/01/2003',
        '03/01/2003',
        '04/01/2003',
        '05/01/2003',
        '06/01/2003',
        '07/01/2003',
        '08/01/2003',
        '09/01/2003',
        '10/01/2003',
        '11/01/2003',
      ]),
      (this.markers = {
        size: 0,
      }),
      (this.xaxis = {
        type: 'datetime',
      }),
      (this.yaxis = {
        title: {
          text: 'Points',
        },
        min: 0,
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
      });
  }
  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = 'w' + (i + 1).toString();
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }
}
