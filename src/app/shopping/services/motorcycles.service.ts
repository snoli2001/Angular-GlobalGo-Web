import { Injectable } from '@angular/core';
import { IMotorcycle } from '../models/Motorcycle';
import { environment } from '../../../../enviroment';
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
}
