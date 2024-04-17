import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../shared/environments/environment.development';
import { Order } from '../Interfaces/Order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private supabase: SupabaseClient;
  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }
  async getAllOrders() {
    const { data: ordersData, error } = await this.supabase
      .from('orders')
      .select()
      .order('id')
      .returns<Order[]>();
    return { ordersData, error };
  }
  async selectId() {
    const { data: orders, error } = await this.supabase
      .from('orders')
      .select('userId');
  }
  async selectUserId() {
    let { data: orders, error } = await this.supabase
      .from('orders')
      .select('userId');
  }
  async selectProductId() {
    let { data: orders, error } = await this.supabase
      .from('orders')
      .select('productId');
  }
  async selectStatus() {
    let { data: orders, error } = await this.supabase
      .from('orders')
      .select('status');
  }
  async selectQuantity() {
    let { data: orders, error } = await this.supabase
      .from('orders')
      .select('quantity');
  }
  async readAllRows() {
    let { data: orders, error } = await this.supabase
      .from('orders')
      .select('*');
  }
}
