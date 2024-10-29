import { Component } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent {
  clientes: Cliente []= [
    {id: 1, nome: 'Joao', celular: '159988442233', email: 'joao@gmail.com'},
    {id: 2, nome: 'Giovanne', celular: '159988123322', email: 'giovanne@gmail.com'},
    {id: 3, nome: 'Rogerio', celular: '159911112211', email: 'rogerio@gmail.com'},
  ];
}
