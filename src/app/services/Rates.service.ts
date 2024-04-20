import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Rate } from '../Interfaces/Rate';
import { environment } from '../shared/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RatesService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // get All data
  async getAllRates() {
    const { data: ratesData, error } = await this.supabase
      .from('rates')
      .select()
      .order('id')
      .returns<Rate[]>();
    return { ratesData, error };
  }

  // get single data by Id
  async getSingleRate(id: string) {
    const { data: rateData, error } = await this.supabase
      .from('rates')
      .select()
      .eq('id', id)
      .single();
    return { rateData, error };
  }

  // add new data
  async addNewRate(newData: Rate) {
    const { data: addedData, error } = await this.supabase
      .from('rates')
      .insert(newData)
      .single();
    return { addedData, error };
  }

  // update data by Id
  async updateRate(data: Rate) {
    const { data: updatedData, error } = await this.supabase
      .from('rates')
      .update(data)
      .match({ id: data.id });
    return { updatedData, error };
  }

  // delete data by Id
  async deleteRate(id: string) {
    const { data: deletedData, error } = await this.supabase
      .from('rates')
      .delete()
      .eq('id', id);
    return { deletedData, error };
  }
}
