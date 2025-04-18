import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, find } from 'rxjs/operators';
import { findLocate } from 'src/app/utils/communities';
import { WeatherListService } from 'src/app/services/weather-list/weather-list.service';

@Component({
  selector: 'app-nav-weather',
  templateUrl: './nav-weather.component.html',
  styleUrls: ['./nav-weather.component.css']
})
export class NavWeatherComponent implements OnInit, OnDestroy {
  
  searchInput: FormControl = new FormControl('');
  searchSuscription: Subscription | undefined = undefined;

  constructor(private weatehrS: WeatherListService) {}

  ngOnInit() {
    this.searchSuscription = this.searchInput.valueChanges
      .pipe(
        debounceTime(1000), // espera 300ms tras dejar de escribir
        distinctUntilChanged() // solo si el valor cambió
      )
      .subscribe((valor : string )=> {
        if (valor != undefined)
          this.search(valor);
      });
    this.weatehrS.weatherListChange.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnDestroy(): void {
    if (this.searchSuscription)
      this.searchSuscription.unsubscribe();
  }

  search(sear: string) {
    let locates = findLocate(sear);
    //this.weatehrS.changeLocationDataList(locates, 0);
    this.weatehrS.searchWeather(locates);
  }
}
