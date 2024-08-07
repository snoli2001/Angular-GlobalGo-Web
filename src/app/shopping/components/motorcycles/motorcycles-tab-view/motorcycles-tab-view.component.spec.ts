import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyclesTabViewComponent } from './motorcycles-tab-view.component';

describe('MotorcyclesTabViewComponent', () => {
  let component: MotorcyclesTabViewComponent;
  let fixture: ComponentFixture<MotorcyclesTabViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcyclesTabViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotorcyclesTabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
