import { Injectable } from '@angular/core';
import { IMotorcycle } from '../models/Motorcycle';
import { environment } from '../../../../enviroment';
import { ICategory } from '../models/Categories';
import { IColor } from '../models/Colors';

@Injectable({
  providedIn: 'root'
})
export class MotorCycleService {

  async getMotorCycles(): Promise<IMotorcycle[]> {
    try {
      const response = await fetch(`${environment.apiUrl}/Motorcycle/getMotorcycles`);
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
      const response = await fetch(`${environment.apiUrl}/Motorcycle/getMotorcycleByID/${motoId}`);
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

  async getMotorcyclesColors(modeloId:number):Promise<IColor[]>{
    try {
      const response = await fetch(`${environment.apiUrl}/Colors/getAll/${modeloId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch motorcycles");
      }
      const data = await response.json();
      return data as IColor[];

    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

}
