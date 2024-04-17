import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { SubCategory } from '../Interfaces/SubCategory';
import { environment } from '../shared/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class SubCategoriesService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // get All data
  async getAllSubCategories() {
    const { data: subCategoriesData, error } = await this.supabase
      .from('subcategories')
      .select('*', { count: 'exact', head: true });

    return { subCategoriesData, error };
  }

  // get new index for next adding
  async getNextId() {
    let lastId = 0;
    const { data: lastData, error } = await this.supabase
      .from('subcategories')
      .select()
      .limit(1)
      .order('id', { ascending: false });
    if (lastData) {
      lastId = lastData[0].id;
    }
    return { lastId, error };
  }

  // get single data by Id
  async getSingleSubCategory(id: number) {
    const { data: subCategoryData, error } = await this.supabase
      .from('subcategories')
      .select()
      .eq('id', id)
      .single();
    return { subCategoryData, error };
  }

  // add new data
  async addNewSubCategory(newData: SubCategory) {
    const { data: addedData, error } = await this.supabase
      .from('subcategories')
      .insert(newData)
      .single();
    return { addedData, error };
  }

  // update data by Id
  async updateSubCategory(data: SubCategory) {
    const { data: updatedData, error } = await this.supabase
      .from('subcategories')
      .update(data)
      .match({ id: data.id });
    return { updatedData, error };
  }

  // delete data by Id
  async deleteSubCategory(id: number) {
    const { data: deletedData, error } = await this.supabase
      .from('subcategories')
      .delete()
      .eq('id', id);
    return { deletedData, error };
  }
}
