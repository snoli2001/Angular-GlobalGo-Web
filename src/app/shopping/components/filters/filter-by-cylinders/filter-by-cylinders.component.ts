import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
@Component({
  selector: 'app-filter-by-cylinders',
  standalone: true,
  imports: [ClearFilterComponent,CommonModule,AccordionModule,CheckboxModule],
  templateUrl: './filter-by-cylinders.component.html',
  styleUrl: './filter-by-cylinders.component.css'
})
export class FilterByCylindersComponent {
  public cylinders:any[] = [];

}
