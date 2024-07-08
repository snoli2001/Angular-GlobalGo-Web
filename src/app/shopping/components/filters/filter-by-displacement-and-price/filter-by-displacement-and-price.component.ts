import { Component, Input, Output, output } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { FilterCollectionComponent } from '../filter-collection/filter-collection.component';
import { FormsModule } from '@angular/forms';
import { IMotorcycle } from '../../../models/Motorcycle';
import { MotoStateService } from '../../../states/moto.state.service';
@Component({
  selector: 'app-filter-by-displacement-and-price',
  standalone: true,
  imports: [FormsModule,DropdownModule, SidebarModule, FilterCollectionComponent],
  templateUrl: './filter-by-displacement-and-price.component.html',
  styleUrl: './filter-by-displacement-and-price.component.css',
})
export class FilterByDisplacementAndPriceComponent {  
  @Input() motorcycles: IMotorcycle[] = [];
  public sortedMotorcycles: IMotorcycle[] = [];
  public changeList: boolean = true;

  public orderBy: any = [
    { name: 'Precio más bajo', function: 'priceLow' },
    { name: 'Precio más alto', function: 'priceHigh' },
    { name: 'Cilindrada más alta', function: 'displacementHigh' },
    { name: 'Cilindrada más baja', function: 'displacementLow' },
  ];
  public visible: boolean = false;
  public optionsSelected: any = null;

  constructor(private motoStateService:MotoStateService){}

  public toggleSideBard(){
    this.visible =  !this.visible;
  }

  onDropdownChange(event: any) {
    if (event.value) {
      this.motoStateService.orderbyLowestOrHighestPrice(event.value.function);
    }else{
      console.log("no hay brand")
    }
  }

}
