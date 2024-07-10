import { Component } from '@angular/core';
import { MotoHeaderDetailComponent } from '../../components/motorcycles/moto-header-detail/moto-header-detail.component';
import { MotoTechnicalSpecificationComponent } from '../../components/motorcycles/moto-technical-specification/moto-technical-specification.component';
import { ChispaInformationComponent } from '../../components/motorcycles/chispa-information/chispa-information.component';
import { CarrouselForMotorcyclesComponent } from '../../components/motorcycles/carrousel-for-motorcycles/carrousel-for-motorcycles.component';
import { IMotorcycle } from '../../models/Motorcycle';
import { MotoStateService } from '../../states/moto.state.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-motorcycle-detail',
  standalone: true,
  imports: [MotoHeaderDetailComponent,MotoTechnicalSpecificationComponent,ChispaInformationComponent,CarrouselForMotorcyclesComponent, CommonModule],
  templateUrl: './motorcycle-detail.component.html',
  styleUrl: './motorcycle-detail.component.css'
})
export class MotorcycleDetailComponent {
  motorCycle: IMotorcycle | null = null;
  constructor(private serviceState: MotoStateService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const motoId = +params['id']; 
      this.serviceState.getMotorcycleByID(motoId);
    });

    this.serviceState.moto$.subscribe({
      next: (moto) => {
        this.motorCycle = moto;
      },
      error: (error) => {
        console.log('Error fetching this motorcycle', error);
      }
    });
  }
}
