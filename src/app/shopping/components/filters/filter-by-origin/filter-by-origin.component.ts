import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-filter-by-origin',
  standalone: true,
  imports: [AccordionModule, CommonModule, CheckboxModule ,FormsModule],
  templateUrl: './filter-by-origin.component.html',
  styleUrl: './filter-by-origin.component.css'
})
export class FilterByOriginComponent {
  public origins: any[] = [
    { name: "All", selected: false },
    { name: "OEM", selected: false },
    { name: "Aftermarkets", selected: false }
];
}
