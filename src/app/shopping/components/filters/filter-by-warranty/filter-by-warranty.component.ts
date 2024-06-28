import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter-by-warranty',
  standalone: true,
  imports: [AccordionModule,SliderModule,FormsModule],
  templateUrl: './filter-by-warranty.component.html',
  styleUrl: './filter-by-warranty.component.css'
})
export class FilterByWarrantyComponent {
  public kilometers:number= 0;
  public months:number=0;
}
