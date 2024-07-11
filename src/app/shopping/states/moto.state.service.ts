import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMotorcycle } from '../models/Motorcycle';
import { MotorCycleService } from '../services/motorcycles.service';
@Injectable({
  providedIn: 'root'
})
export class MotoStateService {
  private motosSubject = new BehaviorSubject<IMotorcycle[]>([]);
  private originalMotos: IMotorcycle[] = [];
  motos$: Observable<IMotorcycle[]> = this.motosSubject.asObservable();  
  private motoSubject = new BehaviorSubject<IMotorcycle | null>(null);
  moto$: Observable<IMotorcycle | null> = this.motoSubject.asObservable();

  constructor(private motoService:MotorCycleService) {}
  
  setMotos(motos: IMotorcycle[]) {
    this.originalMotos = motos;
    this.motosSubject.next(motos);
  }

  async getMotorCyclesFromAPI() {
    try {
      const data = await this.motoService.getMotorCycles();
      this.setMotos(data);
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

  async getMotorcycleByID(id: number) {
    try {
      const data = await this.motoService.getMotorcycleByID(id);
      this.motoSubject.next(data);
    } catch (error) {
      console.error("Error fetching motorcycle:", error);
      throw error;
    }
  }

  orderByCategories(category:string){
    const filteredMotos = this.originalMotos.filter(
      (moto) => moto.categoria.toLowerCase() === category.toLowerCase()
    );
    this.motosSubject.next(filteredMotos);
  }

  orderByLowestPrice() {
    const sortedMotos = [...this.motosSubject.getValue()].sort((a, b) => {
      return parseFloat(a.cilindrada) - parseFloat(b.cilindrada);
    });
    this.motosSubject.next(sortedMotos);
  }

  orderByBrand(make: string) {
    const filteredMotos = this.originalMotos.filter(
      (moto) => moto.marca.toLowerCase() === make.toLowerCase()
    );
    this.motosSubject.next(filteredMotos);
  }

  orderbyLowestOrHighestPrice(orderBy: string) {
    const sortedMotos = [...this.motosSubject.getValue()];
    if (orderBy === 'priceHigh') {
      sortedMotos.sort((a, b) => {
        return b.precio - a.precio;
      });
    } else if (orderBy === 'priceLow') {
      sortedMotos.sort((a, b) => {
        return a.precio - b.precio;
      });
    } else if (orderBy === 'displacementHigh') {
      sortedMotos.sort((a, b) => {
        return parseFloat(b.cilindrada) - parseFloat(a.cilindrada);
      });
    } else if (orderBy === 'displacementLow') {
      sortedMotos.sort((a, b) => {
        return parseFloat(a.cilindrada) - parseFloat(b.cilindrada);
      });
    }
    this.motosSubject.next(sortedMotos);
  }

  orderByPerformance(performance: number){
    const filteredMotorcycles = this.originalMotos.filter(
      (moto) => parseInt(moto.rendimiento) < performance
    );
    this.motosSubject.next(filteredMotorcycles);
  }

  orderByPrice(min: number, max: number) {
    const filteredMotorcycles = this.originalMotos.filter(
      (moto) => moto.precio > min && moto.precio <= max
    );
    this.motosSubject.next(filteredMotorcycles);
  }

  orderByPower(power:number){
    const filteredMotorcycles = this.originalMotos.filter(
      (moto) => parseInt(moto.potencia) < power
    );
    this.motosSubject.next(filteredMotorcycles);
  }

  orderByDisplacement(displacement:number){
    const filteredMotorcycles = this.originalMotos.filter(
      (moto) => parseInt(moto.cilindrada) < displacement
    );
    this.motosSubject.next(filteredMotorcycles);
  }

  resetFilters() {
    this.motosSubject.next(this.originalMotos);
  }
}
