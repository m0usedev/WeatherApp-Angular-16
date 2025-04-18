import { Component, OnInit } from '@angular/core';
import { WeatherListService } from 'src/app/services/weather-list/weather-list.service';
import { weatherLocateTime } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {
  
  public weatherList : weatherLocateTime[] | undefined;

  constructor (private weatherS: WeatherListService) { } 

  ngOnInit(): void {
    this.weatherS.weatherListChange.subscribe((value) => {
      this.weatherList = value;
    })
  }
}
