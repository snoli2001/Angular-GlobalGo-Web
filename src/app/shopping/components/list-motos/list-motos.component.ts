import { Component } from '@angular/core';
import { MotoCardComponent } from '../moto-card/moto-card.component';
import { MotorCycleService } from '../../services/motorcycles.service';
import { IMotorcycle } from '../../models/Motorcycle';

@Component({
  selector: 'app-list-motos',
  standalone: true,
  imports: [MotoCardComponent],
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
    console.log(this.motorCycles);
  }

  async getMotorCycles(): Promise<void> {
    try {
      this.motorCycles = await this.service.getMotorCycles(); 
    } catch (error) {
      console.error('Error fetching motorcycles:', error); 
    }
  }
}
