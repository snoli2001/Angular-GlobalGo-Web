import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselForMotorcyclesComponent } from './carrousel-for-motorcycles.component';

describe('CarrouselForMotorcyclesComponent', () => {
  let component: CarrouselForMotorcyclesComponent;
  let fixture: ComponentFixture<CarrouselForMotorcyclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrouselForMotorcyclesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrouselForMotorcyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
