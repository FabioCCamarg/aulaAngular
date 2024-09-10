import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular-media',
  templateUrl: './calcular-media.component.html',
  styleUrl: './calcular-media.component.scss'
})
export class CalcularMediaComponent {
  public ac1!: number;
  public ac2!: number;
  public ag!: number;
  public af!: number;
  public mediaFinal!: number;
  public status: string= "";

  public calcular() {
    //calculo da média
    this.mediaFinal =(this.ac1 * 0.15) + (this.ac2 *0.30) + (this.ag * 0.10) + (this.af * 0.45);
    console.log(this.mediaFinal)

    //verifica aprovado ou reprovado
    return this.status = this.mediaFinal >= 5 ? "Aprovado": "Reprovado";
  }





}
