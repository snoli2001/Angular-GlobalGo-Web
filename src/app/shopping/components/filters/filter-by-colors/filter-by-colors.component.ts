import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { ButtonCheckComponent } from '../../../../public/components/button-check/button-check.component';
import { MotoStateService } from '../../../states/moto.state.service';
@Component({
  selector: 'app-filter-by-colors',
  standalone: true,
  imports: [AccordionModule,ButtonCheckComponent],
  templateUrl: './filter-by-colors.component.html',
  styleUrl: './filter-by-colors.component.css'
})
export class FilterByColorsComponent {
  colors: string[] = [];

  constructor(private motoStateService: MotoStateService) {}

  handleFilter(color: string) {
    const index = this.colors.indexOf(color);
    if (index > -1) {
      this.colors.splice(index, 1);
    } else {
      this.colors.push(color);
    }
    console.log(this.colors);
    // this.motoStateService.orderByColors(this.colors);
  }
}
