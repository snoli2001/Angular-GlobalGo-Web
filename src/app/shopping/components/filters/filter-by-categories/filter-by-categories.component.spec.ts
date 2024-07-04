import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByCategoriesComponent } from './filter-by-categories.component';

describe('FilterByCategoriesComponent', () => {
  let component: FilterByCategoriesComponent;
  let fixture: ComponentFixture<FilterByCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByCategoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
