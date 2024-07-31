import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IMotorcycle } from '../../../models/Motorcycle';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moto-header-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moto-header-detail.component.html',
  styleUrl: './moto-header-detail.component.css',
})
export class MotoHeaderDetailComponent {
  @Input() motorcycle: IMotorcycle | undefined;
  public today: Date;
  public motoId:number;
  public financingUrl: string;

  constructor(private route: ActivatedRoute) {
    this.today = new Date();
    const id = this.route.snapshot.paramMap.get('id');
    this.motoId = id ? parseInt(id, 10) : 0;
    this.financingUrl = `https://globalgo-login.sis360.com.pe/solicitar-financiamiento?Id=${this.motoId}`;
  }

  getPathHeader(img: string | undefined): string {
    return `../../../../../assets/imgs/cabeceras/${img}`;
  }

  getPathLogo(img: string | undefined): string {
    return `../../../../../assets/imgs/logos/${img}`;
  }

  getPathLogoHeader1(img: string | undefined): string {
    return `../../../../../assets/imgs/negativos/${img}`;
  }

  getPathLogoHeader2(img: string | undefined): string {
    return `../../../../../assets/imgs/modelos/${img}`;
  }

}
