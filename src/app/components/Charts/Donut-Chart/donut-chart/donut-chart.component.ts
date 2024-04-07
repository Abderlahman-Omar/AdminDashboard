import { Component, OnInit } from '@angular/core';
import {
  ApexChart,
  ApexNonAxisChartSeries,
  ApexResponsive,
} from 'ng-apexcharts';
@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrl: './donut-chart.component.css',
})
export class DonutChartComponent implements OnInit {
  series!: ApexNonAxisChartSeries;
  chart!: ApexChart;
  responsive!: ApexResponsive[];
  labels: any;
  ngOnInit(): void {
    this.initializeChartOptions();
  }
  private initializeChartOptions(): void {
    (this.series = [44, 55, 13, 43, 22]),
      (this.chart = {
        type: 'donut',
      }),
      (this.labels = ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']),
      (this.responsive = [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ]);
  }
}
