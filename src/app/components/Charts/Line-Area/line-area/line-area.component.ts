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
  ApexStroke,
} from 'ng-apexcharts';
@Component({
  selector: 'app-line-area',
  templateUrl: './line-area.component.html',
  styleUrl: './line-area.component.css',
})
export class LineAreaComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  yaxis!: ApexYAxis | ApexYAxis[];
  labels!: string[];
  stroke!: ApexStroke;
  markers!: ApexMarkers;
  fill!: ApexFill;
  tooltip!: ApexTooltip;
  ngOnInit(): void {
    this.initializeChartOptions();
  }
  private initializeChartOptions(): void {
    (this.series = [
      {
        name: 'TEAM A',
        type: 'area',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
      },
      {
        name: 'TEAM B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
      },
    ]),
      (this.chart = {
        height: 350,
        type: 'line',
      }),
      (this.stroke = {
        curve: 'smooth',
      }),
      (this.fill = {
        type: 'solid',
        opacity: [0.35, 1],
      }),
      (this.labels = [
        'Dec 01',
        'Dec 02',
        'Dec 03',
        'Dec 04',
        'Dec 05',
        'Dec 06',
        'Dec 07',
        'Dec 08',
        'Dec 09 ',
        'Dec 10',
        'Dec 11',
      ]),
      (this.markers = {
        size: 0,
      }),
      (this.yaxis = [
        {
          title: {
            text: 'Series A',
          },
        },
        {
          opposite: true,
          title: {
            text: 'Series B',
          },
        },
      ]),
      (this.xaxis = {
        labels: {
          trim: false,
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
