import { Injectable } from '@angular/core';
import { IMotorcycle } from '../models/Motorcycle';
import { environment } from '../../../../enviroment';
import { ICategory } from '../models/Categories';

@Injectable({
  providedIn: 'root'
})
export class MotorCycleService {

  async getMotorCycles(): Promise<IMotorcycle[]> {
    try {
      // const response = await fetch(`${environment.apiUrl}/Motorcycle/getMotorcycles`);
      const response = await fetch(`${environment.jsonServer}/motorcycles`);
      if (!response.ok) {
        throw new Error("Failed to fetch motorcycles");
      }
      const data = await response.json();
      return data as IMotorcycle[];
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

  async getMotorcycleByID(motoId:number):Promise<IMotorcycle>{
    try {
      // const response = await fetch(`${environment.apiUrl}/Motorcycle/getMotorcycleByID/${motoId}`);
      const response = await fetch(`http://localhost:3000/motorcycles/20`);
      if (!response.ok) {
        throw new Error("Failed to fetch motorcycles");
      }
      const data = await response.json();
      return data as IMotorcycle;
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

  async getCategories():Promise<ICategory>{
    try {
      const response = await fetch(`${environment.apiUrl}/Category/getAll`);
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      return data as ICategory;
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }
}
