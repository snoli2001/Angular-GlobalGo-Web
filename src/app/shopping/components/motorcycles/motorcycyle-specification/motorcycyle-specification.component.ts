import { Component, Input } from '@angular/core';
import { IMotorcycle } from '../../../models/Motorcycle';
import { MotorcyclesTabViewComponent } from '../motorcycles-tab-view/motorcycles-tab-view.component';

@Component({
  selector: 'app-motorcycyle-specification',
  standalone: true,
  imports: [MotorcyclesTabViewComponent],
  templateUrl: './motorcycyle-specification.component.html',
  styleUrl: './motorcycyle-specification.component.css'
})
export class MotorcycyleSpecificationComponent {
  @Input() public motorcycle:IMotorcycle = {} as IMotorcycle;
}
