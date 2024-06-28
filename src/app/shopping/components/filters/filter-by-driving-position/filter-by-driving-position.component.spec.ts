import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByDrivingPositionComponent } from './filter-by-driving-position.component';

describe('FilterByDrivingPositionComponent', () => {
  let component: FilterByDrivingPositionComponent;
  let fixture: ComponentFixture<FilterByDrivingPositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByDrivingPositionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByDrivingPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
