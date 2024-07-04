import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-filter-by-rating',
  standalone: true,
  imports: [AccordionModule,CheckboxModule, CommonModule, FormsModule],
  templateUrl: './filter-by-rating.component.html',
  styleUrl: './filter-by-rating.component.css'
})
export class FilterByRatingComponent {
  public ratings: any[] = [
    { name: "Wruth", selected: false },
    { name: "Bosch", selected: false },
    { name: "Varta", selected: false },
    { name: "Dorman", selected: false },
    { name: "Brigdestone", selected: false },
    { name: "Michelin", selected: false },
    { name: "Castrol", selected: false }
];


}
