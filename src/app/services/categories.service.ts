import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Observable } from 'rxjs';
import { environment } from '../shared/environments/environment.development';
import { ICategory } from '../Interfaces/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  // constructor(private httpClient: HttpClient) {}

  // getCategory(): Observable<any> {
  //   return this.httpClient.get(`http://localhost:3000/api/categories`);
  // }
  // getCategoryDetails(id: string): Observable<any> {
  //   return this.httpClient.get(`http://localhost:3000/api/categories/${id}`);
  // }
  // getDepartment(): Observable<any> {
  //   return this.httpClient.get(`http://localhost:3000/api/departments`);
  // }
  ///////////////////////////////////////////
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // get All data
  async getAllCategories() {
    const { data: categoriesData, error } = await this.supabase
      .from('categories')
      .select()
      .order('id')
      .returns<ICategory[]>();
    return { categoriesData, error };
  }

  // get single data by Id
  async getSingleCategory(id: number) {
    const { data: categoryData, error } = await this.supabase
      .from('categories')
      .select()
      .eq('id', id)
      .single();
    return { categoryData, error };
  }

  // add new data
  async addNewCategory(newData: ICategory) {
    const { data: addedData, error } = await this.supabase
      .from('categories')
      .insert(newData)
      .single();
    return { addedData, error };
  }

  // add new subcategory
  async editSubCategories(method: string, id: number, newIdx: number) {
    const { data: categoryData } = await this.supabase
      .from('categories')
      .select()
      .eq('id', id)
      .single();
    let editedCat = categoryData as ICategory;
    if (method == 'add') {
      editedCat.subCategories.push(newIdx);
    } else if (method == 'delete') {
      editedCat.subCategories.splice(newIdx, 1);
    }
    const { updatedData, error } = await this.updateCategory(editedCat);
    return { updatedData, error };
  }

  // update data by Id
  async updateCategory(data: ICategory) {
    const { data: updatedData, error } = await this.supabase
      .from('categories')
      .update(data)
      .match({ id: data.id });
    return { updatedData, error };
  }

  // delete data by Id
  async deleteCategory(id: number) {
    const { data: deletedData, error } = await this.supabase
      .from('categories')
      .delete()
      .eq('id', id);
    return { deletedData, error };
  }
}
