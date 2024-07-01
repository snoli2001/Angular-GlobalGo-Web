import { Component } from '@angular/core';
import { MotoHeaderDetailComponent } from '../../components/motorcycles/moto-header-detail/moto-header-detail.component';
import { MotoTechnicalSpecificationComponent } from '../../components/motorcycles/moto-technical-specification/moto-technical-specification.component';
import { ChispaInformationComponent } from '../../components/motorcycles/chispa-information/chispa-information.component';
@Component({
  selector: 'app-motorcycle-detail',
  standalone: true,
  imports: [MotoHeaderDetailComponent,MotoTechnicalSpecificationComponent,ChispaInformationComponent],
  templateUrl: './motorcycle-detail.component.html',
  styleUrl: './motorcycle-detail.component.css'
})
export class MotorcycleDetailComponent {

}
