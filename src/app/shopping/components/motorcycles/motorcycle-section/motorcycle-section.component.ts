import { Component, Input } from '@angular/core';
import { AdvertisingComponent } from '../../../../public/components/advertising/advertising.component';
import { FilterByDisplacementAndPriceComponent } from '../../filters/filter-by-displacement-and-price/filter-by-displacement-and-price.component';
import { ListMotosComponent } from '../list-motos/list-motos.component';
import { IMotorcycle } from '../../../models/Motorcycle';
@Component({
  selector: 'app-motorcycle-section',
  standalone: true,
  imports: [ListMotosComponent,AdvertisingComponent,FilterByDisplacementAndPriceComponent],
  templateUrl: './motorcycle-section.component.html',
  styleUrl: './motorcycle-section.component.css'
})
export class MotorcycleSectionComponent {
  @Input() listMotos: IMotorcycle[] = [];
}
