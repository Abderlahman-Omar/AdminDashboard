import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IProduct } from '../Interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getProducts(page: any): Observable<any> {
    return this.httpClient.get(
      `http://localhost:3000/api/products?limit=10&page=${page}`
    );
  }
  getProductDetails(id: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/api/products/${id}`);
  }

  removeProduct(id: string): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/api/products/${id}`);
  }
  addNewProduct(prd: IProduct): Observable<IProduct> {
    return this.httpClient
      .post<IProduct>(
        `http://localhost:3000/api/products`,
        JSON.stringify(prd),
        {
          headers: {
            // 'authorization':'ssdsdssds'
            'content-type': 'application/json',
          },
        }
      )
      .pipe(
        retry(2),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => {
            return new Error('Error in add new Product');
          });
        })
      );
  }
  updateProduct(prd: any, id: string): Observable<any> {
    return this.httpClient
      .patch<any>(
        `http://localhost:3000/api/products/${id}`,
        JSON.stringify(prd),
        {
          headers: {
            // 'authorization':'ssdsdssds'
            'content-type': 'application/json',
          },
        }
      )
      .pipe(
        retry(2),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => {
            return new Error('Error in add new Product');
          });
        })
      );
  }

  // nextPage() {
  //   this.page = this.page + 1;
  //   console.log(this.page);
  // }
  // previousPage() {
  //   this.page = this.page - 1;
  //   console.log(this.page);
  // }
  // getProducts(): Observable<any> {
  //   return this.httpClient.get(
  //     'https://ecommerce.routemisr.com/api/v1/products'
  //   );
  // }
  // getProductDetails(id: string): Observable<any> {
  //   return this.httpClient.get(
  //     `https://ecommerce.routemisr.com/api/v1/products/${id}`
  //   );
  // }
}
