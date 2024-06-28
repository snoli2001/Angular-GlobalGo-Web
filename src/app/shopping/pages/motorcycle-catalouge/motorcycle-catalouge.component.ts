import { Component } from '@angular/core';
import { ListMotosComponent } from '../../components/list-motos/list-motos.component';
import { FilterCollectionComponent } from '../../components/filters/filter-collection/filter-collection.component';

@Component({
  selector: 'app-motorcycle-catalouge',
  standalone: true,
  imports: [ListMotosComponent,FilterCollectionComponent],
  templateUrl: './motorcycle-catalouge.component.html',
  styleUrl: './motorcycle-catalouge.component.css'
})
export class MotorcycleCatalougeComponent {

}
