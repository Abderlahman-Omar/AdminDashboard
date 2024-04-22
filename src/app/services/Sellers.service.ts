import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../shared/environments/environment.development';
import { Seller } from '../Interfaces/Seller';

@Injectable({
  providedIn: 'root',
})
export class SellersService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }
  async getAllSellers() {
    const { data: sellerData, error } = await this.supabase
      .from('sellers')
      .select('*')
      .order('id', { ascending: true })
      .returns<Seller[]>();
    const { count } = await this.supabase
      .from('sellers')
      .select('*', { count: 'exact', head: true });
    return { sellerData, count, error };
  }
}
