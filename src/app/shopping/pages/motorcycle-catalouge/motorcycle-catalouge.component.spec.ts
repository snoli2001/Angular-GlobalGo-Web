import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleCatalougeComponent } from './motorcycle-catalouge.component';

describe('MotorcycleCatalougeComponent', () => {
  let component: MotorcycleCatalougeComponent;
  let fixture: ComponentFixture<MotorcycleCatalougeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleCatalougeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorcycleCatalougeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
