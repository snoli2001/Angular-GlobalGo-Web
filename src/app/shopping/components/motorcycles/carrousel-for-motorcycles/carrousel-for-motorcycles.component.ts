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
      itemImageSrc: 'https://tomodachimotors.com/wp-content/uploads/2022/07/ssenda-patagonia-169-2022-negro-534e54.png',
      thumbnailImageSrc: 'https://tomodachimotors.com/wp-content/uploads/2022/07/ssenda-patagonia-169-2022-negro-534e54.png',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'https://riogo.pe/wp-content/uploads/2022/05/ssenda-patagonia-250-2021-gallery-9a1b2c-1.jpg',
      thumbnailImageSrc: 'https://riogo.pe/wp-content/uploads/2022/05/ssenda-patagonia-250-2021-gallery-9a1b2c-1.jpg',
      alt: 'Description for Image 1',
      title: 'Title 1',
    },
    {
      itemImageSrc: 'https://www.ssenda.com/storage/products/6zjwysDkwcVF0QTlJdKRrbP7uKhga7KZSnN6262T.png',
      thumbnailImageSrc: 'https://www.ssenda.com/storage/products/6zjwysDkwcVF0QTlJdKRrbP7uKhga7KZSnN6262T.png',
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
