import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { FilterByPriceAndCoinComponent } from '../filter-by-price-and-coin/filter-by-price-and-coin.component';
import { FilterByBrandComponent } from '../filter-by-brand/filter-by-brand.component';
import { FilterByRatingComponent } from '../filter-by-rating/filter-by-rating.component';
import { FilterByManufacturesComponent } from '../filter-by-manufactures/filter-by-manufactures.component';
@Component({
  selector: 'app-filter-section-group',
  standalone: true,
  imports: [FilterByManufacturesComponent,FilterByRatingComponent,FilterByBrandComponent,AccordionModule, FilterByPriceAndCoinComponent],
  templateUrl: './filter-section-group.component.html',
  styleUrl: './filter-section-group.component.css'
})
export class FilterSectionGroupComponent {

}
