import { Component } from '@angular/core';
import { MotoHeaderDetailComponent } from '../../components/motorcycles/moto-header-detail/moto-header-detail.component';
import { ChispaInformationComponent } from '../../components/motorcycles/chispa-information/chispa-information.component';
import { CarrouselForMotorcyclesComponent } from '../../components/motorcycles/carrousel-for-motorcycles/carrousel-for-motorcycles.component';
import { IMotorcycle } from '../../models/Motorcycle';
import { MotoStateService } from '../../states/moto.state.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DealersStoresMapComponent } from '../../components/motorcycles/dealers-stores-map/dealers-stores-map.component';
import { MotorcycleVideoComponent } from '../../components/motorcycles/motorcycle-video/motorcycle-video.component';

@Component({
  selector: 'app-motorcycle-detail',
  standalone: true,
  imports: [MotoHeaderDetailComponent,ChispaInformationComponent,CarrouselForMotorcyclesComponent,DealersStoresMapComponent,MotorcycleVideoComponent,CommonModule],
  templateUrl: './motorcycle-detail.component.html',
  styleUrl: './motorcycle-detail.component.css'
})
export class MotorcycleDetailComponent {
  motorCycle: IMotorcycle | null = null;
  private timeoutId: any;

  constructor(
    private serviceState: MotoStateService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const motoId = +params['id'];
      this.serviceState.getMotorcycleByID(motoId);
    });

    this.serviceState.moto$.subscribe({
      next: (moto) => {
        this.motorCycle = moto;
        if (this.motorCycle) {
          clearTimeout(this.timeoutId);
        }
      },
      error: (error) => {
        console.log('Error fetching this motorcycle', error);
      },
    });
    this.timeoutId = setTimeout(() => {
      if (!this.motorCycle) {
        this.router.navigate(['/not-found']);
      }
    }, 5000);
  }

  ngOnDestroy() {
    // Limpiamos el temporizador si el componente se destruye
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

}
