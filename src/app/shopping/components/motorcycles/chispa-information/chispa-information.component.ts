import { Component, Input } from '@angular/core';
import { IMotorcycle } from '../../../models/Motorcycle';

@Component({
  selector: 'app-chispa-information',
  standalone: true,
  imports: [],
  templateUrl: './chispa-information.component.html',
  styleUrl: './chispa-information.component.css'
})
export class ChispaInformationComponent {
  @Input() motorcycle:IMotorcycle | undefined;
}
