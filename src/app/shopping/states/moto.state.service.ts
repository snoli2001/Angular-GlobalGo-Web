// src/app/state/moto-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMotorcycle } from '../models/Motorcycle';

@Injectable({
  providedIn: 'root'
})
export class MotoStateService {
  private motosSubject = new BehaviorSubject<IMotorcycle[]>([]);
  private filterSubject = new BehaviorSubject<any>(null);

  motos$: Observable<IMotorcycle[]> = this.motosSubject.asObservable();
  filter$: Observable<any> = this.filterSubject.asObservable();

  constructor() {}

  setMotos(motos: any[]) {
    this.motosSubject.next(motos);
  }

  setFilter(filter: any) {
    this.filterSubject.next(filter);
  }

  async getMotorCyclesFromAPI() {
    try {
      const response = await fetch("http://localhost:3000/motorcycles");
      if (!response.ok) {
        throw new Error("Failed to fetch motorcycles");
      }
      const data = await response.json();
      this.motosSubject.next(data as IMotorcycle[]);
      console.log("desde el state: ",this.motos$);

    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

 
}
