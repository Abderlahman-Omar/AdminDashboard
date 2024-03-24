import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  productId: any;
  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private productService: ProductsService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      // console.log(params.get('id'));
      this.productId = params.get('id');
    });
    this.productService.getProductDetails(this.productId).subscribe({
      next: (response) => {
        console.log(response.data);
        this.productDetails = response.data;
      },
    });
  }
}
