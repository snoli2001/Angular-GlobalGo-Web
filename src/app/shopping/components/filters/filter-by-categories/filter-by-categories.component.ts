import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
@Component({
  selector: 'app-filter-by-categories',
  standalone: true,
  imports: [AccordionModule,ClearFilterComponent],
  templateUrl: './filter-by-categories.component.html',
  styleUrl: './filter-by-categories.component.css'
})
export class FilterByCategoriesComponent {

}
