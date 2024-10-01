import { Component } from '@angular/core';
import { Produto } from '../models/produto';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss',
})
export class ProdutosComponent {

  produtos: Produto[] = [

    { nome: 'Camisa', preco: 500.99 ,descricao: 'Camisa fina, com tecido leve', emEstoque: false },
    { nome:'Sapato', preco: 750.99, descricao: 'Sapato Durável muito confortável', emEstoque: true },
    { nome: 'Calça', preco: 200.99, descricao: 'Calça jeans resistente a Chuva', emEstoque: true },
    { nome: 'Blusa', preco: 350.99, descricao: 'Blusa jeans muito resistente', emEstoque: false },
    { nome: 'Sandalha', preco: 350.99, descricao: 'Sandalha de Couro macio', emEstoque: true },

  ];

  comprar(){

  }
}
