import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleColorComponent } from './motorcycle-color.component';

describe('MotorcycleColorComponent', () => {
  let component: MotorcycleColorComponent;
  let fixture: ComponentFixture<MotorcycleColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorcycleColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
