import { Component, Input } from '@angular/core';
import { IMotorcycle } from '../../../models/Motorcycle';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-chispa-information',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './chispa-information.component.html',
  styleUrl: './chispa-information.component.css'
})
export class ChispaInformationComponent {
  @Input() motorcycle:IMotorcycle | undefined;
  visible: boolean = false;

  dialogHandle(){
    this.visible = !this.visible;
  }
}
