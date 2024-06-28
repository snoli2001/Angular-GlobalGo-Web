import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
@Component({
  selector: 'app-filter-by-fuel-system',
  standalone: true,
  imports: [AccordionModule,CheckboxModule,FormsModule],
  templateUrl: './filter-by-fuel-system.component.html',
  styleUrl: './filter-by-fuel-system.component.css'
})
export class FilterByFuelSystemComponent {
  public systema_combustible:string="";
}
