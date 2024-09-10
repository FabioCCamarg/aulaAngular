import { Component } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrl: './imc.component.scss'
})
export class ImcComponent {
peso!: number;
altura!: number;
imc!: number;
classificacao!: string;


classificarIMC() {
  if (this.imc < 18.5) {
    this.classificacao = 'Abaixo do peso';
  } else if (this.imc >= 18.5 && this.imc < 24.9) {
    this.classificacao = 'Peso normal';
  } else if (this.imc >= 25 && this.imc < 29.9) {
    this.classificacao = 'Sobrepeso';
  } else if (this.imc >= 30 && this.imc < 34.9) {
    this.classificacao = 'Obesidade grau I';
  } else if (this.imc >= 35 && this.imc < 39.9) {
    this.classificacao = 'Obesidade grau II';
  } else if (this.imc >= 40) {
    this.classificacao = 'Obesidade grau III';
  }
}
  calcular() {
    if (this.peso > 0 && this.altura > 0) {
      this.imc = this.peso / (this.altura * this.altura);
      this.classificarIMC();
    }

  }
}
