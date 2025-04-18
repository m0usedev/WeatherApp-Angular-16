import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherListComponent } from './components/weather-list/weather-list.component';
import { WeatherLocatedComponent } from './components/weather-located/weather-located.component';

const routes: Routes = [  
	{ path: '', component: WeatherListComponent },
	{ path: ':locate', component: WeatherLocatedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
