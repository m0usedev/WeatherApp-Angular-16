import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavWeatherComponent } from './nav-weather.component';

describe('NavWeatherComponent', () => {
  let component: NavWeatherComponent;
  let fixture: ComponentFixture<NavWeatherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavWeatherComponent]
    });
    fixture = TestBed.createComponent(NavWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
