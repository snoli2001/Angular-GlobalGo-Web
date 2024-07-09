import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IMotorcycle } from '../models/Motorcycle';

@Injectable({
  providedIn: 'root'
})
export class MotoStateService {
  private motosSubject = new BehaviorSubject<IMotorcycle[]>([]);
  private originalMotos: IMotorcycle[] = [];
  motos$: Observable<IMotorcycle[]> = this.motosSubject.asObservable();

  constructor() {}

  setMotos(motos: IMotorcycle[]) {
    this.originalMotos = motos;
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

  orderbyLowestOrHighestPrice(orderBy: string) {
    const sortedMotos = [...this.motosSubject.getValue()];
    if (orderBy === 'priceHigh') {
      sortedMotos.sort((a, b) => {
        return parseFloat(b.price) - parseFloat(a.price);
      });
    } else if (orderBy === 'priceLow') {
      sortedMotos.sort((a, b) => {
        return parseFloat(a.price) - parseFloat(b.price);
      });
    } else if (orderBy === 'displacementHigh') {
      sortedMotos.sort((a, b) => {
        return parseFloat(b.engine.displacement) - parseFloat(a.engine.displacement);
      });
    } else if (orderBy === 'displacementLow') {
      sortedMotos.sort((a, b) => {
        return parseFloat(a.engine.displacement) - parseFloat(b.engine.displacement);
      });
    }
    this.motosSubject.next(sortedMotos);
  }

  orderByColors(colors: string[]) {
    const filteredMotorcycles = this.originalMotos.filter((moto) =>
      moto.colors.some((motoColor) => colors.includes(motoColor.color))

    );
    this.motosSubject.next(filteredMotorcycles);
    console.log(this.motosSubject);  
  }

  resetFilters() {
    this.motosSubject.next(this.originalMotos);
  }
}
