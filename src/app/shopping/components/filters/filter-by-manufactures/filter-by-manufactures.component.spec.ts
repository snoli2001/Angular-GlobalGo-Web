import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByManufacturesComponent } from './filter-by-manufactures.component';

describe('FilterByManufacturesComponent', () => {
  let component: FilterByManufacturesComponent;
  let fixture: ComponentFixture<FilterByManufacturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByManufacturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByManufacturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
