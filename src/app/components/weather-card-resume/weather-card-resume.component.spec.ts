import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardResumeComponent } from './weather-card-resume.component';

describe('WeatherCardResumeComponent', () => {
  let component: WeatherCardResumeComponent;
  let fixture: ComponentFixture<WeatherCardResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherCardResumeComponent]
    });
    fixture = TestBed.createComponent(WeatherCardResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
