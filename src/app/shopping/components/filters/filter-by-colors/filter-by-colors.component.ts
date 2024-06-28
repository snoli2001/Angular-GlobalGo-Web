import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonCheckComponent } from '../../../../public/components/button-check/button-check.component';
@Component({
  selector: 'app-filter-by-colors',
  standalone: true,
  imports: [AccordionModule,ButtonCheckComponent],
  templateUrl: './filter-by-colors.component.html',
  styleUrl: './filter-by-colors.component.css'
})
export class FilterByColorsComponent {

}
