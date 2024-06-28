import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-filter-by-style',
  standalone: true,
  imports: [AccordionModule,DropdownModule, FormsModule],
  templateUrl: './filter-by-style.component.html',
  styleUrl: './filter-by-style.component.css'
})
export class FilterByStyleComponent {
  public stylesSelected:any;
  public styles:any[]=[
    { name: "Full Chamba", code: "FC" },
    { name: "Callejero", code: "CA" },
    { name: "Ejecutivo", code: "EJ" },
    { name: "Aventurero", code: "AV" }
  ]
}
