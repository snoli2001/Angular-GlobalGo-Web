import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
@Component({
  selector: 'app-filter-by-power',
  standalone: true,
  imports: [AccordionModule,SliderModule,FormsModule,ClearFilterComponent],
  templateUrl: './filter-by-power.component.html',
  styleUrl: './filter-by-power.component.css'
})
export class FilterByPowerComponent {
  public power:number=0;
}
