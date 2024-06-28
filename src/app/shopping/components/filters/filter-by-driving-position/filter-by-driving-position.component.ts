import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-filter-by-driving-position',
  standalone: true,
  imports: [CommonModule,AccordionModule],
  templateUrl: './filter-by-driving-position.component.html',
  styleUrl: './filter-by-driving-position.component.css',
})
export class FilterByDrivingPositionComponent {
  public icons: any[] = [
    { class: 'flaticon-moto', label: 'recta' },
    { class: 'flaticon-motocicleta', label: 'inclinada' },
    { class: 'flaticon-moto-1', label: 'recostada' },
  ];
}
