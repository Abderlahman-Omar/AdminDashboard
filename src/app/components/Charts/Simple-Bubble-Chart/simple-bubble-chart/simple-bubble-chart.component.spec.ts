import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBubbleChartComponent } from './simple-bubble-chart.component';

describe('SimpleBubbleChartComponent', () => {
  let component: SimpleBubbleChartComponent;
  let fixture: ComponentFixture<SimpleBubbleChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleBubbleChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpleBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
