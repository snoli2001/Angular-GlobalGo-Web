import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { CheckboxModule } from 'primeng/checkbox';
import { ClearFilterComponent } from '../clear-filter/clear-filter.component';
import { CommonModule } from '@angular/common';
import { MotoStateService } from '../../../states/moto.state.service';

@Component({
  selector: 'app-filter-by-transmition',
  standalone: true,
  imports: [AccordionModule,CheckboxModule,FormsModule,ClearFilterComponent,CommonModule],
  templateUrl: './filter-by-transmition.component.html',
  styleUrl: './filter-by-transmition.component.css'
})
export class FilterByTransmitionComponent {
  public transmition:any[]=[];
  public icons:any[]= [
    { class: "flaticon-caja-de-cambios-automatica", label: "Semiautomática" },
    { class: "flaticon-caja-de-cambios", label: "Mecánica" },
    { class: "flaticon-caja-de-cambios-automatica", label: "Automática" },
  ]

  constructor(private motoStateService:MotoStateService){

  }

  handleFilter(transmition:string){
    this.motoStateService.orderByTransmition(transmition);
  }

}
