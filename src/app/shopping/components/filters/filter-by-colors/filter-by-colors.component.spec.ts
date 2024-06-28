import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByColorsComponent } from './filter-by-colors.component';

describe('FilterByColorsComponent', () => {
  let component: FilterByColorsComponent;
  let fixture: ComponentFixture<FilterByColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByColorsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
