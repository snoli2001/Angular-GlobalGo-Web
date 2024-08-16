import { Component, Input } from '@angular/core';
import { AdvertisingComponent } from '../../../../public/components/advertising/advertising.component';
import { FilterByDisplacementAndPriceComponent } from '../../filters/filter-by-displacement-and-price/filter-by-displacement-and-price.component';
import { ListMotosComponent } from '../list-motos/list-motos.component';
import { IMotorcycle } from '../../../models/Motorcycle';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-motorcycle-section',
  standalone: true,
  imports: [ListMotosComponent,AdvertisingComponent,FilterByDisplacementAndPriceComponent,CarouselModule,TagModule],
  templateUrl: './motorcycle-section.component.html',
  styleUrl: './motorcycle-section.component.css'
})
export class MotorcycleSectionComponent {
  @Input() listMotos: IMotorcycle[];
  public images: any[];
  responsiveOptions: any[] | undefined;

  constructor(){
    this.listMotos = [];
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
    this.images = [
      {
        itemImageSrc: 'assets/imgs/motorcycles/BAJAJ_150R.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_02.jpg',
        alt: 'Imagen de ejemplo 1',
        title: 'BAJAJ 150R',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/BAJAJ_NS_125.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'BAJAJ NS 125',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/BAJAJ_150R.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_02.jpg',
        alt: 'Imagen de ejemplo 1',
        title: 'BAJAJ 150R',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/BENELLI_TNT_180.jpg',

        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'BENELLI TNT 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/CFMOTO_250NKSTANDARD.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'CFMOTO 250 NK STANDARD',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/SSENDA_VIPER150-NKD.jpg',
        thumbnailImageSrc: 'assets/RONCO_RZ_250.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'SSENDA VIPER150',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/BAJAJ_150R.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_02.jpg',
        alt: 'Imagen de ejemplo 1',
        title: 'BAJAJ 150R',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/BAJAJ_150R.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_02.jpg',
        alt: 'Imagen de ejemplo 1',
        title: 'BAJAJ 150R',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/CFMOTO_250NKSTANDARD.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'CFMOTO 250 NK STANDARD',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/CFMOTO_250NKSTANDARD.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'CFMOTO 250 NK STANDARD',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/CFMOTO_250NKSTANDARD.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'CFMOTO 250 NK STANDARD',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
      {
        itemImageSrc: 'assets/imgs/motorcycles/TVS_ApacheRTR180-Race-Edition.jpg',
        thumbnailImageSrc: 'assets/ssenda_leo110_03.jpg',
        alt: 'Imagen de ejemplo 2',
        title: 'TVS Apache RTR 180',
      },
    ];
  }
}
