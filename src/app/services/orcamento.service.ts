import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {
  private passagemForm: FormGroup | null = null;

  setPassagemForm(form: FormGroup) {
    this.passagemForm = form;
  }

  getPassagemForm(): FormGroup | null {
    return this.passagemForm;
  }

  constructor(private router: Router) { }

  gerarOrcamento(form: FormGroup) {
    this.setPassagemForm(form);
    this.router.navigate(['/orcamento']);
  }
}
