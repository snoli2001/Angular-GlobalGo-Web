import { Component, Input } from '@angular/core';
import { IMotorcycle } from '../../../models/Motorcycle';

@Component({
  selector: 'app-moto-header-detail',
  standalone: true,
  imports: [],
  templateUrl: './moto-header-detail.component.html',
  styleUrl: './moto-header-detail.component.css'
})
export class MotoHeaderDetailComponent {
  @Input() motorcycle: IMotorcycle | undefined;
}
