import { Component, Output,EventEmitter  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { MotoStateService } from '../../../states/moto.state.service';
import { IBrand } from '../../../models/Brand';
import { environment } from '../../../../../../enviroment';

@Component({
  selector: 'app-filter-by-brand',
  standalone: true,
  imports: [AccordionModule,DropdownModule,FormsModule],
  templateUrl: './filter-by-brand.component.html',
  styleUrl: './filter-by-brand.component.css'
})
export class FilterByBrandComponent {
  public selectedBrand:IBrand = {} as IBrand;
  public brands: IBrand[] = [];
  
  constructor(private motoSerivceState:MotoStateService){
    this.brands=[];
    this.getBrandFromAPI();
  }
  orderByBrand(){
    console.log(this.selectedBrand);
    
    this.motoSerivceState.orderByBrand(this.selectedBrand.marca);
  }
  async getBrandFromAPI(){
    try {
      // const response = await fetch("https://api-catalogo.sis360.com.pe/api/Brand/getAll");
      const response = await fetch(`${environment.apiUrl}/Brand/getAll`);
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
