import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { FilterCollectionComponent } from '../filter-collection/filter-collection.component';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-filter-by-price-and-displacement',
  standalone: true,
  imports: [SidebarModule,FilterCollectionComponent,DropdownModule],
  templateUrl: './filter-by-price-and-displacement.component.html',
  styleUrl: './filter-by-price-and-displacement.component.css'
})
export class FilterByPriceAndDisplacementComponent {
  public orderBy:any[] = [
    { name: 'Precio más bajo', function: 'orderByLowestPrice' },
    { name: 'Precio más alto', function: 'orderByHighestPrice' },
    { name: 'Cilindrada más alta', function: 'orderByHighestDisplacement' },
    { name: 'Cilindrada más baja', function: 'orderByLowestDisplacement' },
]
}
