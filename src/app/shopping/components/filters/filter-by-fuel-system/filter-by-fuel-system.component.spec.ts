import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByFuelSystemComponent } from './filter-by-fuel-system.component';

describe('FilterByFuelSystemComponent', () => {
  let component: FilterByFuelSystemComponent;
  let fixture: ComponentFixture<FilterByFuelSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByFuelSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByFuelSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
