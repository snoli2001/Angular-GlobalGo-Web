import { Component } from '@angular/core';
import { MotoCardComponent } from '../moto-card/moto-card.component';
import { MotorCycleService } from '../../services/motorcycles.service';
import { IMotorcycle } from '../../models/Motorcycle';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-list-motos',
  standalone: true,
  imports: [CommonModule,MotoCardComponent, MotoCardComponent],
  templateUrl: './list-motos.component.html',
  styleUrl: './list-motos.component.css'
})
export class ListMotosComponent {
  cardData: string = "Datos de la tarjeta"; // Aquí asigna los datos que deseas pasar al componente hijo
  motorCycles: IMotorcycle[] = []; 

  constructor(private service:MotorCycleService){

  }

  ngOnInit(): void {
    this.getMotorCycles();
  }

  async getMotorCycles(): Promise<void> {
    try {
      console.log("Pre-> ",this.motorCycles);
      this.motorCycles = await this.service.getMotorCycles(); 
      console.log("Afhter --> ",this.motorCycles);
    } catch (error) {
      console.error('Error fetching motorcycles:', error); 
    }
  }
}
