import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealersStoresMapComponent } from './dealers-stores-map.component';

describe('DealersStoresMapComponent', () => {
  let component: DealersStoresMapComponent;
  let fixture: ComponentFixture<DealersStoresMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DealersStoresMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DealersStoresMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
