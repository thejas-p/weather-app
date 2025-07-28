import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './components/weather/weather.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, HttpClientModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'weather-app';
}
