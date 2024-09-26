import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  usuarioLogin: string = '';
  senha: string = '';
  sucesso: string = '';
  erro: string= '';

  constructor(private router: Router) {}
  ngOnInit(): void {}
  public entrar() {
    if (this.usuarioLogin === 'admin' && this.senha === '123') {
      this.sucesso = 'Sucesso!';
      this.erro = '';
      setTimeout(() => {
        this.router.navigate(['home']);
      },1000);

      // console.log('Success')
    }
    else {
      this.erro = 'Erro! Usuario ou Senha Inválida!!!!!!';
      this.sucesso = '';

      this.resetarCampos(); // Chamando o método para limpar os campos
    }
  }

  private resetarCampos() {
    this.usuarioLogin = '';
    this.senha = '';
    setTimeout(()=> {
      this.erro = '';
    },2000);

  }
}
