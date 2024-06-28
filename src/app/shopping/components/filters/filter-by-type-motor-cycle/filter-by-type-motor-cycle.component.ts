import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-filter-by-type-motor-cycle',
  standalone: true,
  imports: [AccordionModule, CommonModule],
  templateUrl: './filter-by-type-motor-cycle.component.html',
  styleUrl: './filter-by-type-motor-cycle.component.css'
})
export class FilterByTypeMotorCycleComponent {
  public icons:any[]= [
    { class: "flaticon-moto", label: "delivery" },
    { class: "flaticon-motocicleta", label: "Motocicleta" },
    { class: "flaticon-moto-1", label: "chopper" },
    { class: "flaticon-motocicleta-1", label: "deportiva" },
    { class: "flaticon-motorcycle-3", label: "scotter" },
    { class: "flaticon-motorbike", label: "Motorbike" },
    { class: "flaticon-motocross", label: "Motocross" },
    { class: "flaticon-bike", label: "Bike" }
]
}
