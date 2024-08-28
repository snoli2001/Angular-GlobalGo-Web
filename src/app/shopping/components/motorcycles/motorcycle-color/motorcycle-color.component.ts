import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-motorcycle-color',
  standalone: true,
  imports: [],
  templateUrl: './motorcycle-color.component.html',
  styleUrl: './motorcycle-color.component.css'
})
export class MotorcycleColorComponent {
  @Input() hex1:string = "";
  @Input() hex2:string = "";
  constructor(){}
}
