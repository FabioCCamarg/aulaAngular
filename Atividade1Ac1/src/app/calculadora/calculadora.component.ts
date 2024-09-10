import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {
    num1!: number;
    num2!: number;
    resultado!: number;
    operador!: string;


    calcular() {
     switch(this.operador){
      case '+':
        this.resultado = this.num1 + this.num2;
        break;
        case '-':
          this.resultado = this.num1 - this.num2;
        break;
        case '*':
          this.resultado = this.num1 * this.num2;
        break;
        case '/':
          this.resultado = this.num1 / this.num2;
        break;
     }
    }
}
