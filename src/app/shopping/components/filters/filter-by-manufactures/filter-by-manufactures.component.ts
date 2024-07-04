import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-filter-by-manufactures',
  standalone: true,
  imports: [CommonModule, FormsModule, AccordionModule,CheckboxModule],
  templateUrl: './filter-by-manufactures.component.html',
  styleUrl: './filter-by-manufactures.component.css',
})
export class FilterByManufacturesComponent {
  public manufacturers: any[] = [
    { name: 'Wruth', selected: false },
    { name: 'Bosch', selected: false },
    { name: 'Varta', selected: false },
    { name: 'Dorman', selected: false },
    { name: 'Brigdestone', selected: false },
    { name: 'Michelin', selected: false },
    { name: 'Castrol', selected: false },
  ];
}
