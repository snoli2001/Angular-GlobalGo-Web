import { Component, Input } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { IMotorcycle } from '../../../models/Motorcycle';
import { TagModule } from 'primeng/tag';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moto-card',
  standalone: true,
  imports: [TagModule,ImageModule,CommonModule],
  templateUrl: './moto-card.component.html',
  styleUrl: './moto-card.component.css'
})
export class MotoCardComponent {
  @Input() data: IMotorcycle | undefined;
  @Input() option: number | undefined;
}
