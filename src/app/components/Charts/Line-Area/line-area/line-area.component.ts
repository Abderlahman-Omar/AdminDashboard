import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  ApexTitleSubtitle,
} from 'ng-apexcharts';
import { RatesService } from '../../../../services/Rates.service';
import { SubCategoriesService } from '../../../../services/SubCategories.service';
import { ProductsService } from '../../../../services/products.service';
import { Filter } from '../../../../Interfaces/Filter';
import { Rate } from '../../../../Interfaces/Rate';
import { IProduct } from '../../../../Interfaces/iproduct';
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
  title!: ApexTitleSubtitle;
  subtitle!: ApexTitleSubtitle;
  productsList: IProduct[] = [];
  productsQuantity: number[] = [];
  totalQuantity: number = 0;
  subList: number[] = [];
  ratesList: Rate[] = [];
  rateAvrList: number[] = [];
  isLoadingPage: boolean = true;
  currentPage: number = 1;
  currentCount: number = 0;
  isFiltered: boolean = false;
  filter: Filter = {
    query: undefined,
    priceMin: undefined,
    priceMax: undefined,
    isBestSeller: false,
    isGiftable: false,
    onlyAvailabe: false,
    returnIdxList: [0, 1, 2, 3],
    pageIdx: 1,
  };
  filterTapOpen: boolean = false;
  constructor(private myService: ProductsService) {}
  ngOnInit(): void {
    this.updateLocalData();
  }
  async updateLocalData() {
    const { productsData, error } = await this.myService.getAllProducts();
    if (productsData) {
      this.productsList = productsData;

      this.productsList.map((product) => {
        if (product.quantity > 0) {
          this.productsQuantity.push(Number(product.quantity));
        }
      });
      this.totalQuantity = this.productsQuantity.reduce(
        (total, qty) => total + qty
      );

      this.initializeChartOptions();
    }
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
        'Apr 01',
        'Apr 02',
        'Apr 03',
        'Apr 04',
        'Apr 05',
        'Apr 06',
        'Apr 07',
        'Apr 08',
        'Apr 09 ',
        'Apr 10',
        'Apr 11',
      ]),
      (this.markers = {
        size: 0,
      }),
      (this.yaxis = [
        {
          // title: {
          //   text: 'Series A',
          // },
        },
        {
          opposite: true,
          // title: {
          //   text: 'Series B',
          // },
        },
      ]),
      (this.xaxis = {
        labels: {
          trim: false,
        },
      }),
      (this.title = {
        text: `${this.totalQuantity}`,
        offsetX: 0,
        style: {
          fontSize: '20px',
        },
      }),
      (this.subtitle = {
        // text: this.confirmedOrders.length,
        text: 'Available Products',
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
