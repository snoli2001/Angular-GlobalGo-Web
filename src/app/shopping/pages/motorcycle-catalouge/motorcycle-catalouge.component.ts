import { Component } from '@angular/core';
import { ListMotosComponent } from '../../components/list-motos/list-motos.component';
@Component({
  selector: 'app-motorcycle-catalouge',
  standalone: true,
  imports: [ListMotosComponent],
  templateUrl: './motorcycle-catalouge.component.html',
  styleUrl: './motorcycle-catalouge.component.css'
})
export class MotorcycleCatalougeComponent {

}
