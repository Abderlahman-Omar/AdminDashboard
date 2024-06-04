import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../../Interfaces/iproduct';
import { CategoriesService } from '../../../services/categories.service';
import { ProductsService } from '../../../services/products.service';
import { Policy, policyData } from '../../../Interfaces/Policy';

@Component({
  selector: 'app-update-product-page',
  templateUrl: './update-product-page.component.html',
  styleUrl: './update-product-page.component.css',
})
export class UpdateProductPageComponent implements OnInit {
  // categories: any;
  // product: IProduct = {} as IProduct;
  // productId: any;
  // constructor(
  //   private activatedRoute: ActivatedRoute,
  //   private categoriesService: CategoriesService,
  //   private productsService: ProductsService,
  //   private router: Router
  // ) {}
  // // ngOnInit(): void {
  // //   this.categoriesService.getCategory().subscribe({
  // //     next: (response) => {
  // //       this.categories = response;
  // //     },
  // //   });
  // //   this.activatedRoute.paramMap.subscribe((params) => {
  // //     this.productId = params.get('id');
  // //     this.productsService.getProductDetails(this.productId).subscribe({
  // //       next: (response) => (this.product = response),
  // //     });
  // //   });
  // // }
  // // addNewProduct() {
  // //   this.productsService.addNewProduct(this.product).subscribe((response) => {
  // //     this.router.navigateByUrl('/dashboard/products');
  // //   });
  // // }
  // // updateProduct() {
  // //   this.productsService
  // //     .updateProduct(this.product, this.productId)
  // //     .subscribe((response) => {
  // //       this.router.navigateByUrl('/dashboard/products');
  // //     });
  // // }
  // //////////////////////////////////////////////
  // ngOnInit(): void {
  //   this.categoriesService.getCategory().subscribe({
  //     next: (response) => {
  //       this.categories = response;
  //     },
  //   });
  //   this.activatedRoute.paramMap.subscribe((params) => {
  //     this.productId = params.get('id');
  //     this.productsService.getSingleProduct(this.productId);
  //   });
  // }
  // addNewProduct() {
  //   this.productsService.addNewProduct(this.product);
  // }
  // updateProduct() {
  //   this.productsService.updateProduct(this.product);
  // }
  /////////////////////////////
  policyData: Policy[] = policyData;

  categories: any;
  product: IProduct = {} as IProduct;
  productId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private categoriesService: CategoriesService,
    private productsService: ProductsService,
    private router: Router
  ) {}
  // ngOnInit(): void {
  //   this.categoriesService.getCategory().subscribe({
  //     next: (response) => {
  //       this.categories = response;
  //     },
  //   });
  //   this.activatedRoute.paramMap.subscribe((params) => {
  //     this.productId = params.get('id');
  //     this.productsService.getProductDetails(this.productId).subscribe({
  //       next: (response) => (this.product = response),
  //     });
  //   });
  // }
  // addNewProduct() {
  //   this.productsService.addNewProduct(this.product).subscribe((response) => {
  //     this.router.navigateByUrl('/dashboard/products');
  //   });
  // }
  // updateProduct() {
  //   this.productsService
  //     .updateProduct(this.product, this.productId)
  //     .subscribe((response) => {
  //       this.router.navigateByUrl('/dashboard/products');
  //     });
  // }
  //////////////////////////////////////////////z
  ngOnInit(): void {
    this.categoriesService.getAllCategories().then((response) => {
      // console.log(response.categoriesData);
      this.categories = response.categoriesData;
    });
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id');
      this.productsService.getSingleProduct(this.productId).then((response) => {
        // console.log(response.productData);
        this.product = response.productData;
      });
    });
  }
  addNewProduct() {
    this.productsService.addNewProduct(this.product).then(() => {
      this.router.navigateByUrl('/dashboard/products');
    });
  }
  updateProduct() {
    this.productsService.updateProduct(this.product).then(() => {
      this.router.navigateByUrl('/dashboard/products');
    });
  }
}
