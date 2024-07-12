import { Component, Input } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { IMotorcycle } from '../../../models/Motorcycle';

@Component({
  selector: 'app-carrousel-for-motorcycles',
  standalone: true,
  imports: [GalleriaModule,TabViewModule],
  templateUrl: './carrousel-for-motorcycles.component.html',
  styleUrl: './carrousel-for-motorcycles.component.css',
})
export class CarrouselForMotorcyclesComponent {
  @Input() motorcycle: IMotorcycle | undefined;

  public images: any[] = [
    {
      itemImageSrc: '../../../../assets/imgs/motorcycles/BAJAJ_DOMINAR_400.jpg',
      thumbnailImageSrc: '../../../../assets/imgs/motorcycles/BAJAJ_DOMINAR_400.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
  ];

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
}
