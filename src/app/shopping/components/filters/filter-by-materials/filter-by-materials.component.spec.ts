import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByMaterialsComponent } from './filter-by-materials.component';

describe('FilterByMaterialsComponent', () => {
  let component: FilterByMaterialsComponent;
  let fixture: ComponentFixture<FilterByMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterByMaterialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterByMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
