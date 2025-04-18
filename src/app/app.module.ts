import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavWeatherComponent } from './components/nav-weather/nav-weather.component';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherLocatedComponent } from './components/weather-located/weather-located.component';
import { WeatherCardResumeComponent } from './components/weather-card-resume/weather-card-resume.component';
import { WeatherCardInfoComponent } from './components/weather-card-info/weather-card-info.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavWeatherComponent,
    WeatherListComponent,
    WeatherLocatedComponent,
    WeatherCardResumeComponent,
    WeatherCardInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
