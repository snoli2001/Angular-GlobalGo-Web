import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByDisplacementComponent } from './filter-by-displacement.component';

describe('FilterByDisplacementComponent', () => {
  let component: FilterByDisplacementComponent;
  let fixture: ComponentFixture<FilterByDisplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByDisplacementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByDisplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
