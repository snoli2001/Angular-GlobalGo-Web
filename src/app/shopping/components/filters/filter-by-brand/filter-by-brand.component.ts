import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-filter-by-brand',
  standalone: true,
  imports: [AccordionModule,DropdownModule,FormsModule],
  templateUrl: './filter-by-brand.component.html',
  styleUrl: './filter-by-brand.component.css'
})
export class FilterByBrandComponent {
  public selectedBrand:String = "";
  public brands: any[] = [
    { name: 'Yamaha', code: 'YM' },
    { name: 'Patagonia', code: 'PG' },
    { name: 'Tvs', code: 'TV' },
    { name: 'Honda', code: 'HN' },
    { name: 'Toyota', code: 'TY' }
  ];
}
