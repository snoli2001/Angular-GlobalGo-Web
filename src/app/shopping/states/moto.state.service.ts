// src/app/state/moto-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMotorcycle } from '../models/Motorcycle';

@Injectable({
  providedIn: 'root'
})
export class MotoStateService {
  private motosSubject = new BehaviorSubject<IMotorcycle[]>([]);
  private originalMotos: IMotorcycle[] = []; // Para almacenar la lista original de motos

  motos$: Observable<IMotorcycle[]> = this.motosSubject.asObservable();

  constructor() {}

  setMotos(motos: IMotorcycle[]) {
    this.originalMotos = motos; // Almacenar la lista original
    this.motosSubject.next(motos);
  }

  async getMotorCyclesFromAPI() {
    try {
      const response = await fetch("http://localhost:3000/motorcycles");
      if (!response.ok) {
        throw new Error("Failed to fetch motorcycles");
      }
      const data = await response.json();
      this.setMotos(data as IMotorcycle[]);
      console.log("desde el state: ", this.motos$);
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

  orderByLowestPrice() {
    const sortedMotos = [...this.motosSubject.getValue()].sort((a, b) => {
      return parseFloat(a.engine.displacement) - parseFloat(b.engine.displacement);
    });
    this.motosSubject.next(sortedMotos);
  }

  orderByBrand(make: string) {
    const filteredMotos = this.originalMotos.filter(
      (moto) => moto.make.toLowerCase() === make.toLowerCase()
    );
    this.motosSubject.next(filteredMotos);
  }

  resetFilters() {
    this.motosSubject.next(this.originalMotos);
  }
}
