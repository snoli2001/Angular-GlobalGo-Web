import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-separator',
  standalone: true,
  imports: [],
  templateUrl: './category-separator.component.html',
  styleUrl: './category-separator.component.css'
})
export class CategorySeparatorComponent {
  @Input() category:string|undefined;
}
