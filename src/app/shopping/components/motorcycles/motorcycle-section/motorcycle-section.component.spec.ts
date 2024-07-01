import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleSectionComponent } from './motorcycle-section.component';

describe('MotorcycleSectionComponent', () => {
  let component: MotorcycleSectionComponent;
  let fixture: ComponentFixture<MotorcycleSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorcycleSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
