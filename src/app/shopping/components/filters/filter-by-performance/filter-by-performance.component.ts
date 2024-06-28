import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter-by-performance',
  standalone: true,
  imports: [AccordionModule,SliderModule,ClearFilterComponent,FormsModule],
  templateUrl: './filter-by-performance.component.html',
  styleUrl: './filter-by-performance.component.css'
})
export class FilterByPerformanceComponent {
  public performace:number=10;
}
