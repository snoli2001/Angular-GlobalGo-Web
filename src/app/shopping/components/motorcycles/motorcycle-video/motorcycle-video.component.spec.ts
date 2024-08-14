import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleVideoComponent } from './motorcycle-video.component';

describe('MotorcycleVideoComponent', () => {
  let component: MotorcycleVideoComponent;
  let fixture: ComponentFixture<MotorcycleVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleVideoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorcycleVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
