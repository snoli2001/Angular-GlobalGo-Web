import { Component, Input } from '@angular/core';
import { IMotorcycle } from '../../../models/Motorcycle';
import { DialogModule } from 'primeng/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chispa-information',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './chispa-information.component.html',
  styleUrl: './chispa-information.component.css'
})
export class ChispaInformationComponent {
  @Input() motorcycle:IMotorcycle | undefined;
  visible: boolean = false;
  public motoId:number;
  public financingUrl: string;

  constructor(private route: ActivatedRoute){
    const id = this.route.snapshot.paramMap.get('id');
    this.motoId = id ? parseInt(id, 10) : 0;
    this.financingUrl = `https://globalgo-login.sis360.com.pe/solicitar-financiamiento?Id=${this.motoId}`;
  }

  dialogHandle(){
    this.visible = !this.visible;
  }
}
