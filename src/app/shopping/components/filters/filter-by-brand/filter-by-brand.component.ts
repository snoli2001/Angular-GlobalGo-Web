import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { MotoStateService } from '../../../states/moto.state.service';
import { IBrand } from '../../../models/Brand';
import { BrandService } from '../../../services/brand.service';

@Component({
  selector: 'app-filter-by-brand',
  standalone: true,
  imports: [AccordionModule,DropdownModule,FormsModule],
  templateUrl: './filter-by-brand.component.html',
  styleUrl: './filter-by-brand.component.css'
})
export class FilterByBrandComponent {
  public selectedBrand:IBrand;
  public brands: IBrand[];
  
  constructor(private motoSerivceState:MotoStateService, private brandService:BrandService){
    this.brands=[];
    this.selectedBrand = {} as IBrand;
    this.getBrandFromAPI();
  }
  orderByBrand(){
    this.motoSerivceState.orderByBrand(this.selectedBrand.marca);
  }
  async getBrandFromAPI(){
    try {
      this.brands = await this.brandService.fetchaBrands();
    } catch (error) {
      console.error("Error fetching motorcycles:", error);
      throw error;
    }
  }

}
