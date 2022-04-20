import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cities = ['Barcelona', 'Madrid', 'Lima', 'Quito'];
  name!: string;
  selection!: string;
  criteria = ''

  title = 'Día 12 del reto';
  url = 'https://carconfigurator.ferrari.com/assets/cars/portofinom/packages/default/car-ferrari-portofino-m_splash.jpg';

  addNewCity(city: string): void {
    this.cities.push(city);
  }
  onCityClicked(city: string): void {
    this.selection = city;
  }

  onClear(): void {
    this.selection = '';
  }

  onSearch(): void {
    console.log('OnSearch');

  }

}
