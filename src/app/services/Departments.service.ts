import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Department } from '../Interfaces/Department';
import { SearchQuery } from '../Interfaces/SearchQuery';
import { environment } from '../shared/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DepartmentsService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );
  }

  // get All data
  async getAllDepartments() {
    const { data: departmentsData, error } = await this.supabase
      .from('departments')
      .select()
      .order('id')
      .returns<Department[]>();
    return { departmentsData, error };
  }

  // get single data by Id
  async getSingleDepartment(id: number) {
    const { data: departmentData, error } = await this.supabase
      .from('departments')
      .select()
      .eq('id', id)
      .single();
    return { departmentData, error };
  }

  // add new data
  async addNewDepartment(newData: Department) {
    const { data: addedData, error } = await this.supabase
      .from('departments')
      .insert(newData)
      .single();
    return { addedData, error };
  }

  // add new query
  async editQueries(
    method: string,
    id: number,
    newData: SearchQuery,
    idx: number = -1
  ) {
    const { data: departmentData } = await this.supabase
      .from('departments')
      .select()
      .eq('id', id)
      .single();
    let originalDep = departmentData as Department;

    const editedQueries = originalDep.queries;
    console.log(editedQueries);
    if (method == 'add') {
      editedQueries.push(newData);
    } else if (method == 'edit' && idx < editedQueries.length) {
      editedQueries[idx] = newData;
    } else if (method == 'delete' && idx < editedQueries.length) {
      editedQueries.splice(idx, 1);
    }
    console.log(editedQueries);
    const editedDep: Department = {
      id: originalDep.id,
      title: originalDep.title,
      imgLink: originalDep.imgLink,
      categories: originalDep.categories,
      queries: [...editedQueries],
    };
    const { updatedData, error } = await this.updateDepartment(editedDep);
    return { error };
  }

  // update data by Id
  async updateDepartment(data: Department) {
    const { data: updatedData, error } = await this.supabase
      .from('departments')
      .update(data)
      .match({ id: data.id });
    return { updatedData, error };
  }

  // delete data by Id
  async deleteDepartment(id: number) {
    const { data: deletedData, error } = await this.supabase
      .from('departments')
      .delete()
      .eq('id', id);
    return { deletedData, error };
  }
}
