import { Component, Output,EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { MotoStateService } from '../../../states/moto.state.service';

@Component({
  selector: 'app-filter-by-brand',
  standalone: true,
  imports: [AccordionModule,DropdownModule,FormsModule],
  templateUrl: './filter-by-brand.component.html',
  styleUrl: './filter-by-brand.component.css'
})
export class FilterByBrandComponent {
  public selectedBrand:any = null;
  public brands: any[] = [
    { name: 'Yamaha', code: 'YM' },
    { name: 'Patagonia', code: 'PG' },
    { name: 'Tvs', code: 'TV' },
    { name: 'Honda', code: 'HN' },
    { name: 'Toyota', code: 'TY' }
  ];
  constructor(private motoSerivceState:MotoStateService){}
  orderByBrand(event: any){    
    if (event.value && event.value.name) {
      console.log('Selected brand:', event.value.name);
      this.motoSerivceState.orderByBrand(event.value.name)
    } else {
      console.log('No brand selected');
      this.motoSerivceState.resetFilters();  
    }
  }
}
