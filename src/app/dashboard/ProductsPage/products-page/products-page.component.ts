import {
  ChangeDetectionStrategy,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { IProduct } from '../../../Interfaces/iproduct';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProductsPageComponent implements OnInit, OnChanges {
  products: any[] = [];
  newProducts: any[] = [];
  product: any;
  productId: any;
  currentPage: any = 1;
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.products = this.newProducts;
  }

  ngOnInit(): void {
    this.updateData();
  }
  updateData() {
    this.productsService.getProducts(this.currentPage).subscribe({
      next: (response) => (this.products = response),
    });
  }

  deleteProduct(productId: string) {
    if (confirm('Are You Sure ?')) {
      this.productsService.removeProduct(productId).subscribe({
        next: (response) => this.updateData(),
      });
    }
  }
  updateProduct(id: any) {
    this.router.navigate(['/dashboard/updateproduct', id]);
  }
  pageChangeEvent(event: number) {
    if (event > 0) {
      console.log(event);
      this.currentPage = event;
      this.updateData();
    }
  }
  // nextPage() {
  //   this.productsService.nextPage();
  // }
  // previousPage() {
  //   this.productsService.previousPage();
  // }
}
