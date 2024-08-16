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
  @Input() motorcycle: IMotorcycle = {} as IMotorcycle;;
  public today: Date;
  public motoId:number;
  public financingUrl: string;

  constructor(private route: ActivatedRoute) {
    this.today = new Date();
    const id = this.route.snapshot.paramMap.get('id');
    this.motoId = id ? parseInt(id, 10) : 0;
    this.financingUrl = `https://globalgo-login.sis360.com.pe/solicitar-financiamiento?Id=${this.motoId}`;
  }

  getModeloLogo(){
    const cleanedModelo = this.motorcycle.modelo.replace(/[-_\s]/g, '').toLocaleLowerCase();
    console.log(`../../../../../assets/imgs/modelosLogos/${this.motorcycle.marca.toLocaleLowerCase()}_${cleanedModelo}_logo.svg`);
    return `../../../../../assets/imgs/modelosLogos/${this.motorcycle.marca.toLocaleLowerCase()}_${cleanedModelo}_logo.svg`;  
    // ../../../../../assets/imgs/modelosLogos/ronco200.svg
  }
  

  getPathHeader(img: string): string {
    return `../../../../../assets/imgs/cabeceras/${img}`;
  }

  getPathLogo(img: string): string {
    return `../../../../../assets/imgs/logos/${img}`;
  }

  getPathLogoHeader1(img: string ): string {
    return `../../../../../assets/imgs/negativos/${img}`;
  }

  getPathLogoHeader2(img: string ): string {
    return `../../../../../assets/imgs/modelos/${img}`;
  }

}
