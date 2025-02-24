import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '0c1efb8bb8c1cdd0b4a69769845dac28';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http:HttpClient) {}
  getWeather(city:string): Observable<any>{
      const url = `${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`;
      return this.http.get(url);
    }
}
