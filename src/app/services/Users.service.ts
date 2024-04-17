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
      .single();
    return { userData, error };
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
