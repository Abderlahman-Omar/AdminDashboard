import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IProduct } from '../Interfaces/iproduct';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../shared/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  // constructor(private httpClient: HttpClient) {}
  // getProducts(page: any): Observable<any> {
  //   return this.httpClient.get(
  //     `http://localhost:3000/api/products?limit=10&page=${page}`
  //   );
  // }
  // getProductDetails(id: string): Observable<any> {
  //   return this.httpClient.get(`http://localhost:3000/api/products/${id}`);
  // }
  // removeProduct(id: string): Observable<any> {
  //   return this.httpClient.delete(`http://localhost:3000/api/products/${id}`);
  // }
  // addNewProduct(prd: IProduct): Observable<IProduct> {
  //   return this.httpClient
  //     .post<IProduct>(
  //       `http://localhost:3000/api/products`,
  //       JSON.stringify(prd),
  //       {
  //         headers: {
  //           // 'authorization':'ssdsdssds'
  //           'content-type': 'application/json',
  //         },
  //       }
  //     )
  //     .pipe(
  //       retry(2),
  //       catchError((err: HttpErrorResponse) => {
  //         return throwError(() => {
  //           return new Error('Error in add new Product');
  //         });
  //       })
  //     );
  // }
  // updateProduct(prd: any, id: string): Observable<any> {
  //   return this.httpClient
  //     .patch<any>(
  //       `http://localhost:3000/api/products/${id}`,
  //       JSON.stringify(prd),
  //       {
  //         headers: {
  //           // 'authorization':'ssdsdssds'
  //           'content-type': 'application/json',
  //         },
  //       }
  //     )
  //     .pipe(
  //       retry(2),
  //       catchError((err: HttpErrorResponse) => {
  //         return throwError(() => {
  //           return new Error('Error in add new Product');
  //         });
  //       })
  //     );
  // }
  /////////////////////////////////
  private supabase: SupabaseClient;
  private pageSize: number = 10;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // get All data
  async getAllProductsByPage(pageIndex: number) {
    const start = (pageIndex - 1) * this.pageSize;
    const end = start + this.pageSize - 1;
    const { data: productsData, error } = await this.supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true })
      .range(start, end)
      .returns<IProduct[]>();
    return { productsData, error };
  }

  // get single data by Id
  async getSingleProduct(id: string) {
    const { data: productData, error } = await this.supabase
      .from('products')
      .select()
      .eq('id', id)
      .single();
    return { productData, error };
  }

  // add new data
  async addNewProduct(newData: IProduct) {
    const { data: addedData, error } = await this.supabase
      .from('products')
      .insert(newData)
      .single();
    return { addedData, error };
  }

  // update data by Id
  async updateProduct(data: IProduct) {
    const { data: updatedData, error } = await this.supabase
      .from('products')
      .update(data)
      .match({ id: data.id });
    return { updatedData, error };
  }

  // delete data by Id
  async deleteProduct(id: string) {
    const { data: deletedData, error } = await this.supabase
      .from('products')
      .delete()
      .eq('id', id);
    return { deletedData, error };
  }
}
