import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByDisplacementAndPriceComponent } from './filter-by-displacement-and-price.component';

describe('FilterByDisplacementAndPriceComponent', () => {
  let component: FilterByDisplacementAndPriceComponent;
  let fixture: ComponentFixture<FilterByDisplacementAndPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByDisplacementAndPriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByDisplacementAndPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
