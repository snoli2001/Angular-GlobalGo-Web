import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoHeaderDetailComponent } from './moto-header-detail.component';

describe('MotoHeaderDetailComponent', () => {
  let component: MotoHeaderDetailComponent;
  let fixture: ComponentFixture<MotoHeaderDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotoHeaderDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotoHeaderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
