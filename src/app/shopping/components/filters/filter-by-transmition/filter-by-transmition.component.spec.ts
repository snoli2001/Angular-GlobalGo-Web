import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByTransmitionComponent } from './filter-by-transmition.component';

describe('FilterByTransmitionComponent', () => {
  let component: FilterByTransmitionComponent;
  let fixture: ComponentFixture<FilterByTransmitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByTransmitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByTransmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
