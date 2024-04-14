import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkLinesComponent } from './spark-lines.component';

describe('SparkLinesComponent', () => {
  let component: SparkLinesComponent;
  let fixture: ComponentFixture<SparkLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SparkLinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparkLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
