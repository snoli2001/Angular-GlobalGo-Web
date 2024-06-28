import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByCylindersComponent } from './filter-by-cylinders.component';

describe('FilterByCylindersComponent', () => {
  let component: FilterByCylindersComponent;
  let fixture: ComponentFixture<FilterByCylindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByCylindersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByCylindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
