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
  // public brands: any[] = [
  //   { name: 'Yamaha', code: 'YM' },
  //   { name: 'Patagonia', code: 'PG' },
  //   { name: 'Tvs', code: 'TV' },
  //   { name: 'Honda', code: 'HN' },
  //   { name: 'Toyota', code: 'TY' }
  // ];
  public brands: any[] = [];
  constructor(private motoSerivceState:MotoStateService){
    this.getBrandFromAPI();
  }
  orderByBrand(event: any){    
    if (event.value && event.value.name) {
      console.log('Selected brand:', event.value.name);
      this.motoSerivceState.orderByBrand(event.value.name)
    } else {
      console.log('No brand selected');
      this.motoSerivceState.resetFilters();  
    }
  }

  async getBrandFromAPI(){
    try {
      const response = await fetch("https://localhost:7092/api/Brand/getAll");
      if (!response.ok) {
        throw new Error("Failed to fetch motorcycles");
      }
      const data = await response.json();
      this.brands = data;
      console.log(this.brands);
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

}
