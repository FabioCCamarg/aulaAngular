import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-diretiva',
  templateUrl: './exemplo-diretiva.component.html',
  styleUrl: './exemplo-diretiva.component.scss'
})
export class ExemploDiretivaComponent {
  mostrarDivIf: boolean = true;
  cidade:string ='';


  colunasTable :any[] = [
    'nome', 'cidade', 'celular'
    ]
  listClientes: any[] = [
    { nome: 'João', cidade:'São Paulo', celular: '1199887766'},
    { nome: 'Maria', cidade:'Rio de Janeiro', celular: '11998765122'},
    { nome: 'Sandro', cidade:'Curitiba', celular: '1199887123'},
  ];
}
