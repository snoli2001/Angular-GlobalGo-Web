import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-filter-by-materials',
  standalone: true,
  imports: [AccordionModule, CheckboxModule, FormsModule,CommonModule],
  templateUrl: './filter-by-materials.component.html',
  styleUrl: './filter-by-materials.component.css'
})
export class FilterByMaterialsComponent {
  public materials: any[] = [
    { name: "Acero", selected: false },
    { name: "Aluminio", selected: false },
    { name: "Cobre", selected: false },
    { name: "Plástico", selected: false },
    { name: "Madera", selected: false },
    { name: "Vidrio", selected: false },
];

}
