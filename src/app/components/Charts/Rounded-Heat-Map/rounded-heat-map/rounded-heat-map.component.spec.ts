import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundedHeatMapComponent } from './rounded-heat-map.component';

describe('RoundedHeatMapComponent', () => {
  let component: RoundedHeatMapComponent;
  let fixture: ComponentFixture<RoundedHeatMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoundedHeatMapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoundedHeatMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
