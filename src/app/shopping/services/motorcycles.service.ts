import { Injectable } from '@angular/core';
import { IMotorcycle } from '../models/Motorcycle';
@Injectable({
  providedIn: 'root'
})
export class MotorCycleService {

  async getMotorCycles(): Promise<IMotorcycle[]> {
    try {
      const response = await fetch("http://localhost:3000/motorcycles");
      // const response = await fetch("https://l9f44106-3000.brs.devtunnels.ms/motorcycles");
      if (!response.ok) {
        throw new Error("Failed to fetch motorcycles");
      }
      const data = await response.json();
      return data as IMotorcycle[]; // Asegúrate de que los datos se devuelvan como un array de IMotorcycle
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }
}
