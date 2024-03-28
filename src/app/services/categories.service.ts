import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}

  getCategory(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/api/categories`);
  }
  getCategoryDetails(id: string): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/api/categories/${id}`);
  }
  getDepartment(): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/api/departments`);
  }
}
