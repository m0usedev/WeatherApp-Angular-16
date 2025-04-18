import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLocatedComponent } from './weather-located.component';

describe('WeatherLocatedComponent', () => {
  let component: WeatherLocatedComponent;
  let fixture: ComponentFixture<WeatherLocatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherLocatedComponent]
    });
    fixture = TestBed.createComponent(WeatherLocatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
