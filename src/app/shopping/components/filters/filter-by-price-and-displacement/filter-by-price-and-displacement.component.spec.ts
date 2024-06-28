import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPriceAndDisplacementComponent } from './filter-by-price-and-displacement.component';

describe('FilterByPriceAndDisplacementComponent', () => {
  let component: FilterByPriceAndDisplacementComponent;
  let fixture: ComponentFixture<FilterByPriceAndDisplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByPriceAndDisplacementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByPriceAndDisplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
