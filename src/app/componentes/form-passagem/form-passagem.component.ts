import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { aeroportosLista, Aeroporto } from '../../model/aeroportos-lista';

@Component({
  selector: 'app-form-passagem',
  imports: [
    FormsModule,
    AutoComplete,
    ReactiveFormsModule
  ],
  templateUrl: './form-passagem.component.html',
  styleUrl: './form-passagem.component.css'
})
export class FormPassagemComponent {
  passagemForm: FormGroup;
  aeroportos: Aeroporto[] = aeroportosLista;
  filtroAeroportosOrigem: Aeroporto[] = [];
  filtroAeroportosDestino: Aeroporto[] = [];
  origemValue: any;
  destinoValue: any;

  searchOrigem(event: { query: string }) {  
    this.filtroAeroportosOrigem = this.aeroportos.filter(aeroporto =>
        aeroporto.name.toLowerCase().includes(event.query.toLowerCase()) ||
        aeroporto.iataCode.toLowerCase().includes(event.query.toLowerCase())
    );
  }
  searchDestino(event: { query: string }) {
    this.filtroAeroportosDestino = this.aeroportos.filter(aeroporto =>
        aeroporto.name.toLowerCase().includes(event.query.toLowerCase()) ||
        aeroporto.iataCode.toLowerCase().includes(event.query.toLowerCase())
    );
  }

  constructor(private fb: FormBuilder) {
    this.passagemForm = this.fb.group({
      origem: [''],
      destino: [''],
      tipoPassagem: [''],
      adultos: [''],
      criancas: [''],
      bebes: [''],
      airline: [''],
      dataIda: [''],
      dataVolta: [''],
      valorPassageiro: [''],
      taxaPassageiro: ['']
    });
  }

  onSubmit() {
    if (this.passagemForm.valid) {
        console.log('Valores do formulário:', this.passagemForm.value);
        // Aqui você faria a lógica para buscar as passagens com os dados do formulário
    } else {
        // Lógica para exibir erros de validação
    }
}

}
