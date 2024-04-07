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
  ApexDataLabels,
  ApexTitleSubtitle,
} from 'ng-apexcharts';
@Component({
  selector: 'app-simple-bubble-chart',
  templateUrl: './simple-bubble-chart.component.html',
  styleUrl: './simple-bubble-chart.component.css',
})
export class SimpleBubbleChartComponent implements OnInit {
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
