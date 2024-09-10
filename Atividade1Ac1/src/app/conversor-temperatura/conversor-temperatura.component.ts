import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-temperatura',
  templateUrl: './conversor-temperatura.component.html',
  styleUrl: './conversor-temperatura.component.scss'
})
export class ConversorTemperaturaComponent {
  celsius!: number;
  fahrenheit!: number;
  kelvin!: number;

  converterTemperatura() {
    this.fahrenheit = (this.celsius * 9/5) + 32;
    this.kelvin = this.celsius + 273.15;
  }
}
