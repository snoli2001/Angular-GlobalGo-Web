import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChispaInformationComponent } from './chispa-information.component';

describe('ChispaInformationComponent', () => {
  let component: ChispaInformationComponent;
  let fixture: ComponentFixture<ChispaInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChispaInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChispaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
