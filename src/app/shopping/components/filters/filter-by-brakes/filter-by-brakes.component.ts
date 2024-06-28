import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
@Component({
  selector: 'app-filter-by-brakes',
  standalone: true,
  imports: [FormsModule,CommonModule,AccordionModule,CheckboxModule,ClearFilterComponent],
  templateUrl: './filter-by-brakes.component.html',
  styleUrl: './filter-by-brakes.component.css'
})
export class FilterByBrakesComponent {
  brakes: string[] = [];
}
