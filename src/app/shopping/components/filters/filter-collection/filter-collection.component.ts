import { Component } from '@angular/core';
import { FilterByBrakesComponent } from '../filter-by-brakes/filter-by-brakes.component';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
@Component({
  selector: 'app-filter-collection',
  standalone: true,
  imports: [FilterByBrakesComponent,ClearFilterComponent],
  templateUrl: './filter-collection.component.html',
  styleUrl: './filter-collection.component.css'
})
export class FilterCollectionComponent {

}
