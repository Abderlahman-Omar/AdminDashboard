import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';
import { IProduct } from '../../../Interfaces/iproduct';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrl: './add-product-page.component.css',
})
export class AddProductPageComponent implements OnInit {
  // categories: any;
  // product: IProduct = {} as IProduct;
  // productId: any;
  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private categoriesService: CategoriesService,
  //   private productsService: ProductsService,
  //   private router: Router
  // ) {}
  // ngOnInit(): void {
  //   this.categoriesService.getCategory().subscribe({
  //     next: (response) => {
  //       this.categories = response;
  //     },
  //   });
  // }
  // addNewProduct() {
  //   this.productsService.addNewProduct(this.product).subscribe((response) => {
  //     this.router.navigateByUrl('/dashboard/products');
  //   });
  // }
  ////////////////////////////////////////////////
  categories: any;
  product: IProduct = {} as IProduct;
  productId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.categoriesService.getAllCategories().then((response) => {
      this.categories = response.categoriesData;
    });
  }
  addNewProduct() {
    this.productsService.addNewProduct(this.product).then(() => {
      this.router.navigateByUrl('/dashboard/products');
    });
  }
}
