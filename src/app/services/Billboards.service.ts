import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Ad } from '../Interfaces/Ad';
import { environment } from '../shared/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class BillboardsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // get All data
  async getAllBillBoards() {
    const { data: billboardsData, error } = await this.supabase
      .from('billboards')
      .select()
      .order('id')
      .returns<Ad[]>();
    return { billboardsData, error };
  }

  // get single data by Id
  async getSingleBillBoard(id: number) {
    const { data: billboardData, error } = await this.supabase
      .from('billboards')
      .select()
      .eq('id', id)
      .single();
    return { billboardData, error };
  }

  // add new data
  async addNewBillBoard(newData: Ad) {
    const { data: addedData, error } = await this.supabase
      .from('billboards')
      .insert(newData)
      .single();
    return { addedData, error };
  }

  // update data by Id
  async updateBillBoard(data: Ad) {
    const { data: updatedData, error } = await this.supabase
      .from('billboards')
      .update(data)
      .match({ id: data.id });
    return { updatedData, error };
  }

  // delete data by Id
  async deleteBillBoard(id: number) {
    const { data: deletedData, error } = await this.supabase
      .from('billboards')
      .delete()
      .eq('id', id);
    return { deletedData, error };
  }
}
