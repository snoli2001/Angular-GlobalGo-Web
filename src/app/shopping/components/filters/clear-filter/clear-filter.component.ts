import { Component, Input } from '@angular/core';
import { MotoStateService } from '../../../states/moto.state.service';

@Component({
  selector: 'app-clear-filter',
  standalone: true,
  imports: [],
  templateUrl: './clear-filter.component.html',
  styleUrl: './clear-filter.component.css'
})
export class ClearFilterComponent {
  @Input() custom_style: string|undefined;

  constructor(private motoStateService: MotoStateService){

  }

  resetFilter(){
    this.motoStateService.resetFilters();
  }

}
