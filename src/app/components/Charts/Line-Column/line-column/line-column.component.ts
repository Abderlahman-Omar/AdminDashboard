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
  labels!: string[];
  stroke!: any; // ApexStroke;
  dataLabels!: any; // ApexDataLabels;
  fill!: ApexFill;
  tooltip!: ApexTooltip;
  ngOnInit(): void {
    this.initializeChartOptions();
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
        text: 'Traffic Sources',
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
