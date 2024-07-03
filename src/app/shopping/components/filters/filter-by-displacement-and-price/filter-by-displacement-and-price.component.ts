import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { SidebarModule } from 'primeng/sidebar';
import { FilterCollectionComponent } from '../filter-collection/filter-collection.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-filter-by-displacement-and-price',
  standalone: true,
  imports: [FormsModule,DropdownModule, SidebarModule, FilterCollectionComponent],
  templateUrl: './filter-by-displacement-and-price.component.html',
  styleUrl: './filter-by-displacement-and-price.component.css',
})
export class FilterByDisplacementAndPriceComponent {
  public changeList: boolean = true;
  public orderBy: any = [
    { name: 'Precio más bajo', function: 'orderByLowestPrice' },
    { name: 'Precio más alto', function: 'orderByHighestPrice' },
    { name: 'Cilindrada más alta', function: 'orderByHighestDisplacement' },
    { name: 'Cilindrada más baja', function: 'orderByLowestDisplacement' },
  ];
  public visible: boolean = false;
  public optionsSelected: any = null;

  public toggleSideBard(){
    this.visible =  !this.visible;
  }

  public toggleList(){
    // this.changeList = !this.changeList;
    // window.alert(this.changeList);
  }

}
