import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySeparatorComponent } from './category-separator.component';

describe('CategorySeparatorComponent', () => {
  let component: CategorySeparatorComponent;
  let fixture: ComponentFixture<CategorySeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySeparatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorySeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
