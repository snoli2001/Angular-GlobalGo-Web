import { Component, Input } from '@angular/core';
import { MotorcycleColorComponent } from '../motorcycle-color/motorcycle-color.component';
import { IColor } from '../../../models/Colors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-colors',
  standalone: true,
  imports: [MotorcycleColorComponent, CommonModule],
  templateUrl: './list-colors.component.html',
  styleUrl: './list-colors.component.css'
})
export class ListColorsComponent {
  @Input() public Colores:IColor[] = [];
}
