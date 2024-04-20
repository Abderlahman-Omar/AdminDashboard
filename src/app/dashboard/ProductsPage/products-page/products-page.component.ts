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
import { Filter } from '../../../Interfaces/Filter';

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

  updateLocalData() {
    if (!this.isFiltered) {
      this.isLoadingPage = true;
      this.productsList = [];
      this.ratesList = [];
      this.subList = [];
      this.myService
        .getAllProductsByPage(this.currentPage)
        .then(({ productsData, count, error }) => {
          if (error) console.log(error);
          if (count) this.currentCount = count;
          if (productsData) {
            this.productsList = productsData;
            this.updateHelperLists();
            this.onClear();
          }
        });
    } else {
      this.isLoadingPage = true;
      this.productsList = [];
      this.ratesList = [];
      this.subList = [];
      this.myService
        .searchFilterProduct(this.filter)
        .then(({ productsData, count, error }) => {
          if (error) console.log(error);
          if (count) this.currentCount = count;
          if (productsData) {
            this.productsList = productsData;
            this.updateHelperLists();
            this.onClear();
          }
        });
    }
  }

  updateHelperLists() {
    this.productsList.map((prod) => {
      prod.subCatergory.map((s: number, j) => {
        this.subCategoriesService.getSingleSubCategory(s).then((sc) => {
          this.subList.push(sc.subCategoryData.title);
        });
        this.ratesService.getSingleRate(prod.id).then((r) => {
          this.ratesList.push(r.rateData);
          const avr = this.getRateAvr(r.rateData);
          this.rateAvrList.push(avr);
        });
      });
    });
  }

  onClear() {
    this.isLoadingPage = false;
  }

  onToggleFilter() {
    this.filterTapOpen = !this.filterTapOpen;
  }

  getStockColor(q: number) {
    if (q == 0) return 'bg-red-700';
    else if (q < 3) return 'bg-red-400';
    else if (q < 7) return 'bg-yellow-400';
    else return 'bg-green-400';
  }
  getRateAvr(rate: Rate) {
    return (
      (rate.votes1 +
        rate.votes2 * 2 +
        rate.votes3 * 3 +
        rate.votes4 * 4 +
        rate.votes5 * 5) /
      100
    );
  }
  deleteProduct(productId: string) {
    if (confirm('Are You Sure ?')) {
      this.myService.deleteProduct(productId).then(() => {
        this.updateLocalData();
      });
    }
  }
  updateProduct(id: any) {
    this.router.navigate(['/dashboard/updateproduct', id]);
  }
  onNextPage() {
    if (this.isFiltered) {
      const end = this.filter.pageIdx * this.productsList.length;
      if (end < this.currentCount) {
        this.filter.pageIdx++;
        this.updateLocalData();
      }
    } else {
      const end = this.currentPage * this.productsList.length;
      if (end < this.currentCount) {
        this.currentPage++;
        this.updateLocalData();
      }
    }
  }
  onPrevPage() {
    if (this.isFiltered) {
      if (this.filter.pageIdx > 1) {
        this.filter.pageIdx--;
        this.updateLocalData();
      }
    } else {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.updateLocalData();
      }
    }
  }
  onToEdit(id: string) {
    this.router.navigate(['/dashboard/products', id]);
  }
  onClearFilter() {
    this.isFiltered = false;
    this.filter = {
      query: undefined,
      priceMin: undefined,
      priceMax: undefined,
      isBestSeller: false,
      isGiftable: false,
      onlyAvailabe: false,
      returnIdxList: [0, 1, 2, 3],
      pageIdx: 1,
    };
    this.filterTapOpen = false;
    this.updateLocalData();
  }
  onApplyFilter() {
    this.isFiltered = true;
    console.log(this.filter);
    this.updateLocalData();
  }

  onDeleteProduct(id: string) {
    if (confirm('Are you Sure?')) {
      this.isLoadingPage = true;
      this.myService.deleteProduct(id).then(({ error }) => {
        if (error) console.log(error);
        this.updateLocalData();
        this.isLoadingPage = false;
      });
    }
  }
}
