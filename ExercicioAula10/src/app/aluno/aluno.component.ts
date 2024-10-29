import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css'],
})
export class AlunoComponent {
  form: FormGroup;
  cursos: string[] = ['','ads', 'SI', 'Jogos'];
  constructor() {
    this.form = new FormGroup({
      ra: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
      nome: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
      dataMatricula: new FormControl({ value: new Date(), disabled: false }),
      valorMensalidade: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9*$]'),
      ]),
    });
  }

  enviar() {
    if (this.form.valid) {
      console.log('Fomulário Enviado!', this.form.value);
    } else {
      console.log('Fomulário inválido!');
    }
  }
}
