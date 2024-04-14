import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexXAxis,
  ApexStroke,
} from 'ng-apexcharts';
@Component({
  selector: 'app-rounded-heat-map',
  templateUrl: './rounded-heat-map.component.html',
  styleUrl: './rounded-heat-map.component.css',
})
export class RoundedHeatMapComponent implements OnInit {
  series!: ApexAxisChartSeries;
  chart!: ApexChart;
  dataLabels!: ApexDataLabels;
  fill!: any;
  colors!: any;
  stroke!: ApexStroke;
  title!: ApexTitleSubtitle;
  xaxis!: ApexXAxis;
  plotOptions!: ApexPlotOptions;
  ngOnInit(): void {
    this.initializeChartOptions();
  }
  private initializeChartOptions(): void {
    (this.series = [
      {
        name: 'Metric1',
        data: this.generateData(20, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric2',
        data: this.generateData(20, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric3',
        data: this.generateData(20, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric4',
        data: this.generateData(20, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric5',
        data: this.generateData(20, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric6',
        data: this.generateData(20, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric7',
        data: this.generateData(20, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric8',
        data: this.generateData(20, {
          min: 0,
          max: 90,
        }),
      },
      {
        name: 'Metric8',
        data: this.generateData(20, {
          min: 0,
          max: 90,
        }),
      },
    ]),
      (this.chart = {
        height: 350,
        type: 'heatmap',
      }),
      (this.stroke = {
        width: 0,
      }),
      (this.plotOptions = {
        heatmap: {
          radius: 30,
          enableShades: false,
          colorScale: {
            ranges: [
              {
                from: 0,
                to: 50,
                color: '#008FFB',
              },
              {
                from: 51,
                to: 100,
                color: '#00E396',
              },
            ],
          },
        },
      }),
      (this.dataLabels = {
        enabled: true,
        style: {
          colors: ['#fff'],
        },
      }),
      (this.xaxis = {
        type: 'category',
      }),
      (this.title = {
        text: 'Rounded (Range without Shades)',
      });
  }
  public generateData(count: any, yrange: any) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
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
