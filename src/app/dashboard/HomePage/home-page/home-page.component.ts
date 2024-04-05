import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    this.initializeChartOptions();
  }
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  xaxis!: ApexXAxis;
  title!: ApexTitleSubtitle;
  private initializeChartOptions(): void {
    this.series = [
      {
        name: 'My-series',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ];
    this.chart = {
      height: 350,
      type: 'bar',
    };
    this.title = {
      text: 'My First Angular Chart',
    };
    this.xaxis = {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
      ],
    };
  }
}
