import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotMotorcycleFoundComponent } from './not-motorcycle-found.component';

describe('NotMotorcycleFoundComponent', () => {
  let component: NotMotorcycleFoundComponent;
  let fixture: ComponentFixture<NotMotorcycleFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotMotorcycleFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotMotorcycleFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
