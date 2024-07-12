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
  public selectedBrand:any = {} as object;
  public brands: any[] = [];
  
  constructor(private motoSerivceState:MotoStateService){
    this.getBrandFromAPI();
  }
  orderByBrand(){
    this.motoSerivceState.orderByBrand(this.selectedBrand.marca);
  }

  async getBrandFromAPI(){
    try {
      const response = await fetch("http://localhost:3000/brands");
      if (!response.ok) {
        throw new Error("Failed to fetch motorcycles");
      }
      const data = await response.json();
      this.brands = data;
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

}
