import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-filter-by-diameter',
  standalone: true,
  imports: [AccordionModule, CommonModule, FormsModule,CheckboxModule],
  templateUrl: './filter-by-diameter.component.html',
  styleUrl: './filter-by-diameter.component.css'
})
export class FilterByDiameterComponent {
  public diameters: any[] = [
    { name: "19", selected: false },
    { name: "20", selected: false },
    { name: "21", selected: false }
];

}
