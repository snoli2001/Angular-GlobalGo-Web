import { Component } from '@angular/core';
import { MotoHeaderDetailComponent } from '../../components/motorcycles/moto-header-detail/moto-header-detail.component';

@Component({
  selector: 'app-motorcycle-detail',
  standalone: true,
  imports: [MotoHeaderDetailComponent],
  templateUrl: './motorcycle-detail.component.html',
  styleUrl: './motorcycle-detail.component.css'
})
export class MotorcycleDetailComponent {

}
