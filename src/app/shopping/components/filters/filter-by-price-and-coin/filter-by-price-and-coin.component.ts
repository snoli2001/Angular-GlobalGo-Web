import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

@Component({
  selector: 'app-filter-by-price-and-coin',
  standalone: true,
  imports: [FloatLabelModule,AccordionModule,SliderModule,ClearFilterComponent,InputTextModule,FormsModule],
  templateUrl: './filter-by-price-and-coin.component.html',
  styleUrl: './filter-by-price-and-coin.component.css'
})
export class FilterByPriceAndCoinComponent {
  public rangeValues: number[] = [20, 80];

}
