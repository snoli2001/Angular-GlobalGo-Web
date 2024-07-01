import { Component } from '@angular/core';
import { FilterCollectionComponent } from '../../components/filters/filter-collection/filter-collection.component';
import { MotorcycleSectionComponent } from '../../components/motorcycle-section/motorcycle-section.component';
@Component({
  selector: 'app-motorcycle-catalouge',
  standalone: true,
  imports: [FilterCollectionComponent,MotorcycleSectionComponent],
  templateUrl: './motorcycle-catalouge.component.html',
  styleUrl: './motorcycle-catalouge.component.css'
})
export class MotorcycleCatalougeComponent {

}
