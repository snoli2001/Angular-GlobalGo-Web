import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';

@Component({
  selector: 'app-filter-by-displacement',
  standalone: true,
  imports: [
    FormsModule,
    AccordionModule,
    SliderModule,
    ClearFilterComponent,
    BadgeModule,
  ],
  templateUrl: './filter-by-displacement.component.html',
  styleUrl: './filter-by-displacement.component.css',
})
export class FilterByDisplacementComponent {
  public displacement: number = 20;
}
