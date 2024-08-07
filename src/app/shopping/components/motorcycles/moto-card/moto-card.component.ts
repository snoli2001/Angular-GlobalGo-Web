import { Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { IMotorcycle } from '../../../models/Motorcycle';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-moto-card',
  standalone: true,
  imports: [TagModule,ImageModule,CommonModule,RouterLink],
  templateUrl: './moto-card.component.html',
  styleUrl: './moto-card.component.css'
})
export class MotoCardComponent {
  @Input() data: IMotorcycle | undefined;
  @Input() option: number | undefined;

  getImagePath(imageName: string | undefined): string {
    return `../../../../../assets/imgs/motorcycles/${imageName}`;
  }
  
  getbrandPath(imageName: string | undefined):string{
    return `../../../../../assets/imgs/logos/${imageName}`;
  }


}
