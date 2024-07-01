import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoTechnicalSpecificationComponent } from './moto-technical-specification.component';

describe('MotoTechnicalSpecificationComponent', () => {
  let component: MotoTechnicalSpecificationComponent;
  let fixture: ComponentFixture<MotoTechnicalSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoTechnicalSpecificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotoTechnicalSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
