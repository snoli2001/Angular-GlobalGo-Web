import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPowerComponent } from './filter-by-power.component';

describe('FilterByPowerComponent', () => {
  let component: FilterByPowerComponent;
  let fixture: ComponentFixture<FilterByPowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByPowerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByPowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
