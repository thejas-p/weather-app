import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss',
})
export class WeatherComponent {
  city: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  getWeather() {
    if (this.city) {
      this.weatherService.getWeather(this.city).subscribe(
        (data: any) => {
          this.weatherData = data;
        },
        (error: any) => {
          console.error('error fetching weather data', error);
          alert('Could not fetch weather data. Please try again later.');
        }
      );
    }
  }
}
