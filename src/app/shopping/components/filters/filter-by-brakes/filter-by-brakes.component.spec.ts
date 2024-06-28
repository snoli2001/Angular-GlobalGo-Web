import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByBrakesComponent } from './filter-by-brakes.component';

describe('FilterByBrakesComponent', () => {
  let component: FilterByBrakesComponent;
  let fixture: ComponentFixture<FilterByBrakesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByBrakesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByBrakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
