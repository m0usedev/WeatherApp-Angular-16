import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardInfoComponent } from './weather-card-info.component';

describe('WeatherCardInfoComponent', () => {
  let component: WeatherCardInfoComponent;
  let fixture: ComponentFixture<WeatherCardInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCardInfoComponent]
    });
    fixture = TestBed.createComponent(WeatherCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
