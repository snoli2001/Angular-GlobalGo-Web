import { Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { IMotorcycle } from '../../../models/Motorcycle';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-moto-card',
  standalone: true,
  imports: [TagModule,ImageModule,CommonModule,RouterLink],
  templateUrl: './moto-card.component.html',
  styleUrl: './moto-card.component.css'
})
export class MotoCardComponent {
  @Input() data: IMotorcycle;
  @Input() option: number;
  public financingUrl: string;
  public motoId:number;

  constructor(private route: ActivatedRoute){
    this.data = {} as IMotorcycle
    this.option = 0;
    const id = this.route.snapshot.paramMap.get('id');
    this.motoId = id ? parseInt(id, 10) : 0;
    this.financingUrl = `https://globalgo-login.sis360.com.pe/solicitar-financiamiento?Id=${this.motoId}`;
  }

  getImagePath(imageName: string): string {
    return `../../../../../assets/imgs/motorcycles/${imageName}`;
  }
  
  getbrandPath(imageName: string):string{
    return `../../../../../assets/imgs/logos/${imageName}`;
  }

  getBrandColor(color:string){
    switch (color) {
      case 'Cafe Racer':
          return '#8B4513'; // Marrón
      case 'Cruiser - Chopper':
          return '#000000'; // Negro
      case 'Cub':
          return '#FFD700'; // Dorado
      case 'Deportiva':
          return '#FF0000'; // Rojo
      case 'Doble proposito - Todo Terreno':
          return '#008000'; // Verde
      case 'Enduro - Cross':
          return '#FFA500'; // Naranja
      case 'Naked':
          return '#808080'; // Gris
      case 'Pistera':
          return '#0000FF'; // Azul
      case 'Scooter':
          return '#FFC0CB'; // Rosa
      case 'Touring - Viajeras':
          return '#4B0082'; // Índigo
      case 'Utilitaria':
          return '#800080'; // Púrpura
      default:
          return '#FFFFFF'; // Blanco por defecto si no se encuentra coincidencia
    }
  }

}
