import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByPriceAndCoinComponent } from './filter-by-price-and-coin.component';

describe('FilterByPriceAndCoinComponent', () => {
  let component: FilterByPriceAndCoinComponent;
  let fixture: ComponentFixture<FilterByPriceAndCoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByPriceAndCoinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByPriceAndCoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
