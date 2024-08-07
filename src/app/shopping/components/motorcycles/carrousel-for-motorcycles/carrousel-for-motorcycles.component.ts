import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { IMotorcycle } from '../../../models/Motorcycle';
import { MotorcyclesTabViewComponent } from '../motorcycles-tab-view/motorcycles-tab-view.component';

@Component({
  selector: 'app-carrousel-for-motorcycles',
  standalone: true,
  imports: [GalleriaModule, TabViewModule,MotorcyclesTabViewComponent],
  templateUrl: './carrousel-for-motorcycles.component.html',
  styleUrls: ['./carrousel-for-motorcycles.component.css'],
})
export class CarrouselForMotorcyclesComponent implements OnChanges {
  @Input() motorcycle: IMotorcycle | undefined;
  public images: any[] = [];

  public responsiveOptions: any[] = [
    {
      breakpoint: '1300px',
      numVisible: 4,
    },
    {
      breakpoint: '575px',
      numVisible: 1,
    },
  ];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['motorcycle'] && this.motorcycle) {
      this.images = [
        {
          itemImageSrc: `../../../../assets/imgs/motorcycles/${this.motorcycle.imagen}`,
          thumbnailImageSrc: `../../../../assets/imgs/motorcycles/${this.motorcycle.imagen}`,
          alt: 'Description for Image 1',
          title: 'Title 1',
        },
      ];
    }
  }
}
