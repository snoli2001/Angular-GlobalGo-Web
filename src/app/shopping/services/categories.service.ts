import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroment';
import { ICategory } from '../models/Categories';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  async FetchCategories(): Promise<ICategory[]> {
    try {
      const response = await fetch(`${environment.jsonServer}/categories`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return data as ICategory[];
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
}
