import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice',
  templateUrl: './apolice.component.html',
  styleUrl: './apolice.component.scss',
})
export class ApoliceComponent {
  nome!: string;
  sexo!: string;
  idade!: number;
  valorAutomovel!: number;
  valorApolice!: number;
  calcular() {
    //   Se sexo for masculino e idade <= 25: Valor da apólice = 15% do valor do automóvel
    // Se sexo for masculino e idade > 25: Valor da apólice = 10% do valor do automóvel
    // Se sexo for feminino: Valor da apólice = 8% do valor do automóvel
    if (this.sexo === 'masculino' && this.idade <= 25) {
      this.valorApolice = 0.15 * this.valorAutomovel;
    } else if (this.sexo === 'masculino' && this.idade > 25) {
      this.valorApolice = 0.10 * this.valorAutomovel;
    } else if (this.sexo === 'feminino') {
      this.valorApolice = 0.08 * this.valorAutomovel;
    }
  }
}
