import { Injectable } from '@angular/core';
import { User } from '../Interfaces/User';
import { environment } from '../shared/environments/environment.development';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // get All data
  async getAllUsers() {
    const { data: usersData, error } = await this.supabase
      .from('users')
      .select()
      .order('id')
      .returns<User[]>();
    return { usersData, error };
  }

  // get single data by Id
  async getSingleUser(id: string) {
    const { data: userData, error } = await this.supabase
      .from('users')
      .select()
      .eq('id', id)
      .single<User>();
    return { userData, error };
  }
  async checkCreds(email: string, pass: string) {
    const { data: userData, error } = await this.supabase
      .from('users')
      .select()
      .eq('email', email)
      .eq('password', pass)
      .single<User>();
    return { userData, error };
  }
  async checkStatus(id: string) {
    const { data: isSeller, error: e1 } = await this.supabase
      .from('users')
      .select('isSeller')
      .eq('id', id)
      .single<boolean>();
    const { data: isAdmin, error: e2 } = await this.supabase
      .from('users')
      .select('isAdmin')
      .eq('id', id)
      .single<boolean>();
    return { isSeller, isAdmin };
  }

  // add new data
  async addNewUser(newData: User) {
    const { data: addedData, error } = await this.supabase
      .from('users')
      .insert(newData)
      .single();
    return { addedData, error };
  }

  // update data by Id
  async updateUser(data: User) {
    const { data: updatedData, error } = await this.supabase
      .from('users')
      .update(data)
      .match({ id: data.id });
    return { updatedData, error };
  }

  // delete data by Id
  async deleteUser(id: string) {
    const { data: deletedData, error } = await this.supabase
      .from('users')
      .delete()
      .eq('id', id);
    return { deletedData, error };
  }
}
