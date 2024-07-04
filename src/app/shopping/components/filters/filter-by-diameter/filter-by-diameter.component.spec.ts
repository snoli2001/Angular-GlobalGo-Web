import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByDiameterComponent } from './filter-by-diameter.component';

describe('FilterByDiameterComponent', () => {
  let component: FilterByDiameterComponent;
  let fixture: ComponentFixture<FilterByDiameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByDiameterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByDiameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
