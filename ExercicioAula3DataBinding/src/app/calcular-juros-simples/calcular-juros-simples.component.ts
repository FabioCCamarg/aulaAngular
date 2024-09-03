import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-juros-simples',
  templateUrl: './calcular-juros-simples.component.html',
  styleUrl: './calcular-juros-simples.component.scss'
})
export class CalcularJurosSimplesComponent {
  capital: number = 0;
  taxa : number= 0;
  tempo : number = 0;

  jurosSimples : number = 0 ;
  montanteTotal : number = 0;

  juros(): number {
    return this.jurosSimples = this.capital * (this.taxa / 100) * this.tempo;

  }

  montante(): number {
    return this.montanteTotal = this.capital + this.jurosSimples;
  }
}
