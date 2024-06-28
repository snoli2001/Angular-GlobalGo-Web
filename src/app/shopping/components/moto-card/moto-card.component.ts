import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-moto-card',
  standalone: true,
  imports: [CardModule,ImageModule],
  templateUrl: './moto-card.component.html',
  styleUrl: './moto-card.component.css'
})
export class MotoCardComponent {
  @Input() data: IMotorcycle | undefined;
  // @Input() data="";
}
