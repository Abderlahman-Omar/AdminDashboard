import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { Rate } from '../../../Interfaces/Rate';
// import { SubCategoriesService } from '../../../services/sub-categories.service';
import { RatesService } from '../../../services/Rates.service';
import { SubCategoriesService } from '../../../services/SubCategories.service';
import { IProduct } from '../../../Interfaces/iproduct';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductsPageComponent implements OnInit, OnChanges {
  // products: any[] = [];
  // newProducts: any[] = [];
  // product: any;
  // productId: any;
  // currentPage: any = 1;
  // constructor(
  //   private productsService: ProductsService,
  //   private router: Router
  // ) {}
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.products = this.newProducts;
  // }
  // ngOnInit(): void {
  //   this.updateData();
  // }
  // updateData() {
  //   this.productsService.getProducts(this.currentPage).subscribe({
  //     next: (response) => (this.products = response),
  //   });
  // }
  // deleteProduct(productId: string) {
  //   if (confirm('Are You Sure ?')) {
  //     this.productsService.removeProduct(productId).subscribe({
  //       next: (response) => this.updateData(),
  //     });
  //   }
  // }
  // updateProduct(id: any) {
  //   this.router.navigate(['/dashboard/updateproduct', id]);
  // }
  // pageChangeEvent(event: number) {
  //   if (event > 0) {
  //     console.log(event);
  //     this.currentPage = event;
  //     this.updateData();
  //   }
  // }
  /////////////////////////////////
  productsList: IProduct[] = [];
  subList: number[][] = [];
  ratesList: Rate[] = [];
  isLoadingPage: boolean = true;
  currentPage: number = 1;

  constructor(
    private myService: ProductsService,
    private subCategoriesService: SubCategoriesService,
    private ratesService: RatesService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.updateLocalData();
  }
  updateProduct(id: any) {
    this.router.navigate(['/dashboard/updateproduct', id]);
  }
  deleteProduct(productId: string) {
    if (confirm('Are You Sure ?')) {
      this.myService.deleteProduct(productId).then(() => {
        this.updateLocalData();
      });
    }
  }
  async updateLocalData() {
    this.isLoadingPage = true;
    this.productsList = [];
    this.ratesList = [];
    this.subList = [];
    const { productsData, error } = await this.myService.getAllProductsByPage(
      this.currentPage
    );
    if (productsData) {
      this.productsList = productsData;
      // this.productsList.map((prod, i) => {
      //   this.subList.push([]);
      //   prod.subCatergory.map((s: number, j) => {
      //     this.subCategoriesService.getSingleSubCategory(s).then((sc) => {
      //       this.subList[i].push(sc.subCategoryData.title);
      //     });
      //     this.ratesService
      //       .getSingleRate(prod.id)
      //       .then(({ rateData, error }) => {
      //         this.ratesList.push(rateData);
      //       });
      //   });
      // });

      this.onClear();
    }
  }

  onClear() {
    this.isLoadingPage = false;
  }

  getRandomRevnu() {
    return Math.random() * 100;
  }
  getStockColor(q: number) {
    if (q == 0) return 'bg-red-700';
    else if (q < 3) return 'bg-red-400';
    else if (q < 7) return 'bg-yellow-400';
    else return 'bg-green-400';
  }
  getRateAvr(idx: number) {
    return (
      (this.ratesList[idx].votes1 +
        this.ratesList[idx].votes2 +
        this.ratesList[idx].votes3 +
        this.ratesList[idx].votes4 +
        this.ratesList[idx].votes5) /
      5.0
    );
  }

  onNextPage() {
    this.currentPage++;
    this.updateLocalData();
  }
  onPrevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateLocalData();
    }
  }
}
