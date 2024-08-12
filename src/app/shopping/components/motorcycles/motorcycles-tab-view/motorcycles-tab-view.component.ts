import { Component, Input } from '@angular/core';
import { IMotorcycle } from '../../../models/Motorcycle';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-motorcycles-tab-view',
  standalone: true,
  imports: [TabViewModule,AccordionModule,CommonModule],
  templateUrl: './motorcycles-tab-view.component.html',
  styleUrl: './motorcycles-tab-view.component.css'
})
export class MotorcyclesTabViewComponent {
  @Input() motorcycle: IMotorcycle | undefined;
  public option:number;
  
  constructor(){
    this.option = 1;
  }

  handleOption(option:number){
    this.option = option;
  }

  getMotorcycleDescription(): string {
    const largo = this.motorcycle?.largo;
    const ancho = this.motorcycle?.ancho;

    if (!largo || !ancho) {
      return 'Dimensiones no disponibles.';
    }

    if (parseInt(ancho) < 80) {
      return 'Una moto de reducidas dimensiones, ideal para moverse por la ciudad a cortas y medianas distancias.';
    } else if (parseInt(largo) >= 180 && parseInt(largo) <= 220 && parseInt(ancho) >= 60 && parseInt(ancho) <= 80) {
      return 'Una moto de tamaño mediano, versátil y adecuada para diferentes tipos de terreno.';
    } else if (parseInt(largo) > 220 || parseInt(largo) > 80) {
      return 'Una moto de grandes dimensiones, ideal para recorrer largas distancias con comodidad, perfecta para aventuras en carretera.';
    } else {
      return 'Una moto con dimensiones estándar, adaptable a cualquier uso.';
    }
  }

}
