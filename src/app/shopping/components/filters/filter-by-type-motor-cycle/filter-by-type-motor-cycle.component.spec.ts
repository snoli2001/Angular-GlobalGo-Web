import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByTypeMotorCycleComponent } from './filter-by-type-motor-cycle.component';

describe('FilterByTypeMotorCycleComponent', () => {
  let component: FilterByTypeMotorCycleComponent;
  let fixture: ComponentFixture<FilterByTypeMotorCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByTypeMotorCycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByTypeMotorCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
