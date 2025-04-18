import { Component, Input, OnInit } from '@angular/core';
import { weatherLocateTime } from 'src/app/utils/interfaces';

@Component({
  selector: 'app-weather-card-info',
  templateUrl: './weather-card-info.component.html',
  styleUrls: ['./weather-card-info.component.css']
})
export class WeatherCardInfoComponent implements OnInit{
  @Input() locate! : weatherLocateTime;
  public iconSrc : string = '';

  ngOnInit(): void {
    this.iconSrc = `/assets/icons/${this.locate.icon}.svg`
  }
}
