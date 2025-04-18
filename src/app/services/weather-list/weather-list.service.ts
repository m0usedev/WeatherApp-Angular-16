import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { elementsApi, includesApi, weatherLocateTime, weatherLocateTimeResponse } from 'src/app/utils/interfaces';
import { getDateApi, getUrlApi, transformData, transformStringToApi } from 'src/app/utils/api_funtions';
import { comunidadesAutonomas, comunidadesResponse, findLocate } from 'src/app/utils/communities';

@Injectable({
  providedIn: 'root'
})
export class WeatherListService {
  private weatherList : weatherLocateTime[] | undefined;
  public weatherListChange = new BehaviorSubject<weatherLocateTime[] | undefined>(undefined);

  constructor(private http: HttpClient) {
    //this.initializeLocationDataList(comunidadesAutonomas, 0);
    this.fakeInitializeLocationDataList(comunidadesResponse);
  }

  private getLocationData (url: string): void{
    this.weatherList = [];
    this.http.get<weatherLocateTimeResponse>(url)
    .subscribe({
      next: (response: weatherLocateTimeResponse) => {
              const data: weatherLocateTime = transformData(response);
              if (this.weatherList != undefined)
                this.weatherList.push(data);
            },
      error: err => {
        console.log(err)
        this.weatherList = undefined;
      }
    });
  }

  /**
   * 
   * @param {string[]} locates Lista de cominidades que quieres obtener datos
   * @param {number} numData s el numero de dias por delante que quieres la fecha respecto al dia actual. 0 si quieres el dia de hoy.
   */
  private initializeLocationDataList (locates: string[] | undefined, numData: number): void {
    if (locates == undefined)
    {
      this.weatherList = undefined;
      this.weatherListChange.next(this.weatherList);
      return;
    }
    const dateL = getDateApi(numData);
    const elements: elementsApi[] = ["temp", "conditions", "icon", "datetime"];
    const includes: includesApi[] = ['day'];
    locates.forEach((loc) => {
      loc = transformStringToApi(loc);
      const url = getUrlApi(loc, dateL, elements, includes);
      this.getLocationData(url);
    })
    this.weatherListChange.next(this.weatherList);
  }

  private getLocalityData (communityName: string): weatherLocateTime | undefined {
    if (this.weatherList != undefined)
      return this.weatherList.find(entry => entry.locate.toLowerCase() === communityName.toLowerCase());
    return undefined;
  }

  private fakeInitializeLocationDataList (locates: weatherLocateTime[] | undefined): void {
    if (locates == undefined)
    {
      this.weatherList = undefined;
      this.weatherListChange.next(this.weatherList);
      return;
    }
    this.weatherList = [...locates];
    this.weatherListChange.next(this.weatherList);
  }

  public searchWeather (locates: string[] | undefined): void {
    if (locates == undefined)
    {
      this.weatherListChange.next(undefined);
      return;
    }
    let localList: weatherLocateTime[] = []
    locates.forEach((loc) => {
      const res = this.getLocalityData(loc);
      if (res != undefined)
        localList.push(res);
    })
    this.weatherListChange.next([...localList]);
  }
}

