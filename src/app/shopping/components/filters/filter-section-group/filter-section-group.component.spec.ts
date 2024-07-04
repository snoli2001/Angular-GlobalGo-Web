import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSectionGroupComponent } from './filter-section-group.component';

describe('FilterSectionGroupComponent', () => {
  let component: FilterSectionGroupComponent;
  let fixture: ComponentFixture<FilterSectionGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterSectionGroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterSectionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
