import { Component } from '@angular/core';
import { MotoCardComponent } from '../moto-card/moto-card.component';
@Component({
  selector: 'app-list-motos',
  standalone: true,
  imports: [MotoCardComponent],
  templateUrl: './list-motos.component.html',
  styleUrl: './list-motos.component.css'
})
export class ListMotosComponent {
  cardData: string = "Datos de la tarjeta"; // Aquí asigna los datos que deseas pasar al componente hijo

}
