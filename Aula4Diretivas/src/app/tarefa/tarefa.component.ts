import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrl: './tarefa.component.scss'
})
export class TarefaComponent {
 descricao: string = '';
 status: boolean = true;
 mostrarBtn: boolean = true;

 colunaTable = ['Descricao', 'status']

 listaTarefas = [
  {descricao : 'Terminar Conteudo', status: true},
  {descricao : 'Fazer o Header', status: true},
  {descricao : 'Corrigir Bug Footer', status: false},
  {descricao : 'Realizar testes Unitários', status: false},
  {descricao : 'Entrega do Sprit', status: true},
 ];

 trocarStatus(tarefa:any){
  tarefa.status = !tarefa.status;
 }
}
