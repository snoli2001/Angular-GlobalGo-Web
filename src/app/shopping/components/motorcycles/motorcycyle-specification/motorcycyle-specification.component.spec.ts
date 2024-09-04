import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycyleSpecificationComponent } from './motorcycyle-specification.component';

describe('MotorcycyleSpecificationComponent', () => {
  let component: MotorcycyleSpecificationComponent;
  let fixture: ComponentFixture<MotorcycyleSpecificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycyleSpecificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorcycyleSpecificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
