import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByOriginComponent } from './filter-by-origin.component';

describe('FilterByOriginComponent', () => {
  let component: FilterByOriginComponent;
  let fixture: ComponentFixture<FilterByOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByOriginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
