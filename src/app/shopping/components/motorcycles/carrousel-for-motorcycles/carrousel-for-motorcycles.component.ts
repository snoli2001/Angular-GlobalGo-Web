import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { IMotorcycle } from '../../../models/Motorcycle';
import { MotorcyclesTabViewComponent } from '../motorcycles-tab-view/motorcycles-tab-view.component';
import { ICarrusel } from '../../../models/carrusel';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrousel-for-motorcycles',
  standalone: true,
  imports: [GalleriaModule, TabViewModule, MotorcyclesTabViewComponent],
  templateUrl: './carrousel-for-motorcycles.component.html',
  styleUrls: ['./carrousel-for-motorcycles.component.css'],
})
export class CarrouselForMotorcyclesComponent {
  @Input() motorcycle: IMotorcycle = {} as IMotorcycle;
  public carruseles: ICarrusel[] = [];
  public motoId: number = 0;

  constructor(private route: ActivatedRoute) {
  }

  async ngOnInit() {
    try {
      this.route.params.subscribe(params => {
        const motoId = +params['id']; 
        this.motoId = motoId;
      });
      this.carruseles = await this.fetchCarrusel(this.motoId); 
    } catch (error) {
      console.error('Error initializing component:', error);
    }
  }


  getCarruselPath(filename: string) {    
    const cleanedModelo = this.motorcycle.modelo.replace(/[-_\s]/g, '').toUpperCase();
    return `../../../../../assets/imgs/carruseles/${this.motorcycle.marca.toUpperCase()}_${cleanedModelo}/${filename}.jpg`;  
  }

  async fetchCarrusel(motoId:number): Promise<ICarrusel[]> {
    try {
      const response = await fetch(
        `https://localhost:7092/api/Carrusel/getCarrusel/${motoId}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch carrusel');
      }
      const data = await response.json();
      return data as ICarrusel[];
    } catch (error) {
      console.error('Error fetching carrusel:', error);
      return [];
    }
  }
}
