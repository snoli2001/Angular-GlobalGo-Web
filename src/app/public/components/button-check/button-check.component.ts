import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-check',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-check.component.html',
  styleUrls: ['./button-check.component.css'] 
})
export class ButtonCheckComponent {
  @Input() _background: string | undefined; 
  public isCheked: boolean = false; 

  toggleCheck() {
    this.isCheked = !this.isCheked;
    console.log(this.isCheked);
  }
}
