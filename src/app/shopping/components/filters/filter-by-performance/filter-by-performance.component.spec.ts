import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPerformanceComponent } from './filter-by-performance.component';

describe('FilterByPerformanceComponent', () => {
  let component: FilterByPerformanceComponent;
  let fixture: ComponentFixture<FilterByPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByPerformanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
