import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroPAgeComponent } from './hero-page.component';

describe('HeroPAgeComponent', () => {
  let component: HeroPAgeComponent;
  let fixture: ComponentFixture<HeroPAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroPAgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroPAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
