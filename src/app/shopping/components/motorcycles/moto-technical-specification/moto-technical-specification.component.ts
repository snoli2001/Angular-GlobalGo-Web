import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { IMotorcycle } from '../../../models/Motorcycle';
@Component({
  selector: 'app-moto-technical-specification',
  standalone: true,
  imports: [CardModule],
  templateUrl: './moto-technical-specification.component.html',
  styleUrl: './moto-technical-specification.component.css'
})
export class MotoTechnicalSpecificationComponent {
  @Input() motorcycle: IMotorcycle | undefined;

}
