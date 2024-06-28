import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByStyleComponent } from './filter-by-style.component';

describe('FilterByStyleComponent', () => {
  let component: FilterByStyleComponent;
  let fixture: ComponentFixture<FilterByStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
