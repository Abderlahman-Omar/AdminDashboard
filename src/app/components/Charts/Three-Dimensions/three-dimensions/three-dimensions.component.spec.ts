import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimensionsComponent } from './three-dimensions.component';

describe('ThreeDimensionsComponent', () => {
  let component: ThreeDimensionsComponent;
  let fixture: ComponentFixture<ThreeDimensionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeDimensionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
