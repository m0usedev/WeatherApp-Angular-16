import { TestBed } from '@angular/core/testing';

import { WeatherListService } from './weather-list.service';

describe('WeatherListService', () => {
  let service: WeatherListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
