import { Component, Input } from '@angular/core';
import { IMotorcycle } from '../../../models/Motorcycle';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'app-motorcycles-tab-view',
  standalone: true,
  imports: [TabViewModule,AccordionModule],
  templateUrl: './motorcycles-tab-view.component.html',
  styleUrl: './motorcycles-tab-view.component.css'
})
export class MotorcyclesTabViewComponent {
  @Input() motorcycle: IMotorcycle | undefined;

}
