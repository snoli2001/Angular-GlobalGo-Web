import { Component, Input } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { IMotorcycle } from '../../../models/Motorcycle';
@Component({
  selector: 'app-filter-by-categories',
  standalone: true,
  imports: [AccordionModule,ClearFilterComponent],
  templateUrl: './filter-by-categories.component.html',
  styleUrl: './filter-by-categories.component.css'
})
export class FilterByCategoriesComponent {
  @Input() arrayMotorcycles: IMotorcycle[] = [];
  
}
