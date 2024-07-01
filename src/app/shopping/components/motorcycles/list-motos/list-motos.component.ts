import { Component } from '@angular/core';
import { MotoCardComponent } from '../moto-card/moto-card.component';
import { IMotorcycle } from '../../../models/Motorcycle';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { MotorCycleService } from '../../../services/motorcycles.service';

@Component({
  selector: 'app-list-motos',
  standalone: true,
  imports: [CommonModule,MotoCardComponent, MotoCardComponent,ScrollPanelModule],
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
      this.motorCycles = await this.service.getMotorCycles(); 
    } catch (error) {
      console.error('Error fetching motorcycles:', error); 
    }
  }
}
