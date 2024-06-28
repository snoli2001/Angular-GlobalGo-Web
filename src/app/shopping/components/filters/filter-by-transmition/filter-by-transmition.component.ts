import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';

@Component({
  selector: 'app-filter-by-transmition',
  standalone: true,
  imports: [AccordionModule,CheckboxModule,FormsModule,ClearFilterComponent],
  templateUrl: './filter-by-transmition.component.html',
  styleUrl: './filter-by-transmition.component.css'
})
export class FilterByTransmitionComponent {
  public transmition:any[]=[];
}
