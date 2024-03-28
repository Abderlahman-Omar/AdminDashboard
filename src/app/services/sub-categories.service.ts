import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubCategoriesService {
  constructor(private httpClient: HttpClient) {}

  getSubCategories(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/api/sub-categories');
  }
  getSubCategorieDetails(id: string): Observable<any> {
    return this.httpClient.get(
      `http://localhost:3000/api/sub-categories/${id}`
    );
  }
}
