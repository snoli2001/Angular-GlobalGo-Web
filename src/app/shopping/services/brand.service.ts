import { Injectable } from '@angular/core';
import { environment } from '../../../../enviroment';
import { IBrand } from '../models/Brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  async fetchaBrands(): Promise<IBrand[]> {
    try {
        const response = await fetch(`${environment.apiUrl}/Brand/getAll`);
        if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();      
      return data as IBrand[];
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  }
}
