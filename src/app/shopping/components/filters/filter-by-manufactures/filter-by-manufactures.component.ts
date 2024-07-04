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
    { id:"wruth",name: 'Wruth', selected: false },
    { id:"bosch",name: 'Bosch', selected: false },
    { id:"varta",name: 'Varta', selected: false },
    { id:"dorman",name: 'Dorman', selected: false },
    { id:"brigdestone",name: 'Brigdestone', selected: false },
    { id:"michelin",name: 'Michelin', selected: false },
    { id:"castrol",name: 'Castrol', selected: false },
  ];
}
