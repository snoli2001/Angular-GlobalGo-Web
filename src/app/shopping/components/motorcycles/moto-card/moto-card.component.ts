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
  @Input() data: IMotorcycle | undefined;
  @Input() option: number | undefined;
  public financingUrl: string;
  public motoId:number;

  constructor(private route: ActivatedRoute){
    const id = this.route.snapshot.paramMap.get('id');
    this.motoId = id ? parseInt(id, 10) : 0;
    this.financingUrl = `https://globalgo-login.sis360.com.pe/solicitar-financiamiento?Id=${this.motoId}`;
  }

  getImagePath(imageName: string | undefined): string {
    return `../../../../../assets/imgs/motorcycles/${imageName}`;
  }
  
  getbrandPath(imageName: string | undefined):string{
    return `../../../../../assets/imgs/logos/${imageName}`;
  }


}
