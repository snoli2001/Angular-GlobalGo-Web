import { Component } from '@angular/core';
import { FilterByBrakesComponent } from '../filter-by-brakes/filter-by-brakes.component';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { FilterByBrandComponent } from '../filter-by-brand/filter-by-brand.component';
import { FilterByColorsComponent } from '../filter-by-colors/filter-by-colors.component';
import { FilterByCylindersComponent } from '../filter-by-cylinders/filter-by-cylinders.component';
import { FilterByDisplacementComponent } from '../filter-by-displacement/filter-by-displacement.component';
import { FilterByDrivingPositionComponent } from '../filter-by-driving-position/filter-by-driving-position.component';
@Component({
  selector: 'app-filter-collection',
  standalone: true,
  imports: [FilterByDrivingPositionComponent,FilterByBrakesComponent,ClearFilterComponent,FilterByBrandComponent,FilterByColorsComponent,FilterByCylindersComponent,FilterByDisplacementComponent],
  templateUrl: './filter-collection.component.html',
  styleUrl: './filter-collection.component.css'
})
export class FilterCollectionComponent {

}
