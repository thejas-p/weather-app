import { Routes } from '@angular/router';
import { WeatherInfoComponent } from './components/weather-info/weather-info.component';
import { WeatherComponent } from './components/weather/weather.component';

export const routes: Routes = [
  {
    path: '',
    component: WeatherComponent,
  },
  {
    path: 'info',
    component: WeatherInfoComponent,
  },
];
