import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrl: './orders-page.component.css',
})
export class OrdersPageComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  yaxis!: ApexYAxis;
  title!: ApexTitleSubtitle;
  fill!: ApexFill;
  dataLabels!: ApexDataLabels;
  ngOnInit(): void {
    this.initializeChartOptions();
  }
  private initializeChartOptions(): void {
    (this.series = [
      {
        name: 'Bubble1',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Bubble2',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Bubble3',
        data: this.generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
          min: 10,
          max: 60,
        }),
      },
      {
        name: 'Bubble4',
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
        opacity: 0.8,
      }),
      (this.title = {
        text: 'Simple Bubble Chart',
      }),
      (this.xaxis = {
        tickAmount: 12,
        type: 'category',
      }),
      (this.yaxis = {
        max: 70,
      });
  }
  public generateData(baseval: any, count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

      series.push([x, y, z]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
}
////////////////////////////////////////////////
// export class OrdersPageComponent implements OnInit {
//   series!: ApexNonAxisChartSeries;
//   chart!: ApexChart;
//   responsive!: ApexResponsive[];
//   labels: any;
//   ngOnInit(): void {
//     this.initializeChartOptions();
//   }
//   private initializeChartOptions(): void {
//     (this.series = [44, 55, 13, 43, 22]),
//       (this.chart = {
//         type: 'donut',
//       }),
//       (this.labels = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']),
//       (this.responsive = [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200,
//             },
//             legend: {
//               position: 'bottom',
//             },
//           },
//         },
//       ]);
//   }
// }
////////////////////////////////////////////////////////
// export class OrdersPageComponent implements OnInit {
//   series!: ApexAxisChartSeries;
//   chart!: ApexChart;
//   xaxis!: ApexXAxis;
//   markers!: any; //ApexMarkers;
//   stroke: any; //ApexStroke;
//   yaxis!: ApexYAxis | ApexYAxis[];
//   dataLabels!: ApexDataLabels;
//   title!: ApexTitleSubtitle;
//   legend!: ApexLegend;
//   fill!: ApexFill;
//   tooltip!: ApexTooltip;
//   ngOnInit(): void {
//     this.initializeChartOptions();
//   }
//   private initializeChartOptions(): void {
//     this.series = [
//       {
//         name: 'Income',
//         type: 'column',
//         data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
//       },
//       {
//         name: 'Cashflow',
//         type: 'column',
//         data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
//       },
//       {
//         name: 'Revenue',
//         type: 'line',
//         data: [20, 29, 37, 36, 44, 45, 50, 58],
//       },
//     ];
//     this.chart = {
//       height: 350,
//       type: 'line',
//       stacked: false,
//     };
//     this.dataLabels = {
//       enabled: false,
//     };
//     this.stroke = {
//       width: [1, 1, 4],
//     };
//     this.title = {
//       text: 'XYZ - Stock Analysis (2009 - 2016)',
//       align: 'left',
//       offsetX: 110,
//     };
//     this.xaxis = {
//       categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
//     };
//     this.yaxis = [
//       {
//         axisTicks: {
//           show: true,
//         },
//         axisBorder: {
//           show: true,
//           color: '#008FFB',
//         },
//         labels: {
//           style: {
//             colors: '#008FFB',
//           },
//         },
//         title: {
//           text: 'Income (thousand crores)',
//           style: {
//             color: '#008FFB',
//           },
//         },
//         tooltip: {
//           enabled: true,
//         },
//       },
//       {
//         seriesName: 'Income',
//         opposite: true,
//         axisTicks: {
//           show: true,
//         },
//         axisBorder: {
//           show: true,
//           color: '#00E396',
//         },
//         labels: {
//           style: {
//             colors: '#00E396',
//           },
//         },
//         title: {
//           text: 'Operating Cashflow (thousand crores)',
//           style: {
//             color: '#00E396',
//           },
//         },
//       },
//       {
//         seriesName: 'Revenue',
//         opposite: true,
//         axisTicks: {
//           show: true,
//         },
//         axisBorder: {
//           show: true,
//           color: '#FEB019',
//         },
//         labels: {
//           style: {
//             colors: '#FEB019',
//           },
//         },
//         title: {
//           text: 'Revenue (thousand crores)',
//           style: {
//             color: '#FEB019',
//           },
//         },
//       },
//     ];
//     this.tooltip = {
//       fixed: {
//         enabled: true,
//         position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
//         offsetY: 30,
//         offsetX: 60,
//       },
//     };
//     this.legend = {
//       horizontalAlign: 'left',
//       offsetX: 40,
//     };
//   }
// }
