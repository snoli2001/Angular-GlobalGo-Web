import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByWarrantyComponent } from './filter-by-warranty.component';

describe('FilterByWarrantyComponent', () => {
  let component: FilterByWarrantyComponent;
  let fixture: ComponentFixture<FilterByWarrantyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByWarrantyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByWarrantyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
