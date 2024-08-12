import { Component, Input } from '@angular/core';
import { MotoCardComponent } from '../moto-card/moto-card.component';
import { IMotorcycle } from '../../../models/Motorcycle';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DataViewModule } from 'primeng/dataview';
import { PaginatorModule } from 'primeng/paginator';
@Component({
  selector: 'app-list-motos',
  standalone: true,
  imports: [CommonModule,MotoCardComponent, MotoCardComponent,ScrollPanelModule,DataViewModule,PaginatorModule],
  templateUrl: './list-motos.component.html',
  styleUrl: './list-motos.component.css'
})
export class ListMotosComponent {
  @Input() listMotorcycles: IMotorcycle[];
  public option:number;
  constructor(){
    this.option = 1;
    this.listMotorcycles = [];
  }
  handleOption1(){
    this.option = 1;
  }
  handleOption2(){
    this.option = 2;
  }
}
