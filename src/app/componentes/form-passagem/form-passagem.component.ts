import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { aeroportosLista, Aeroporto } from '../../model/aeroportos-lista';
import { DatePickerModule } from 'primeng/datepicker';
import { DividerModule } from 'primeng/divider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SelectModule } from 'primeng/select';
import { passageiroLista, Passageiro } from '../../model/passageiro-lista';
import { airlineLista, Airline } from '../../model/airline-lista';


@Component({
  selector: 'app-form-passagem',
  imports: [
    FormsModule,
    AutoComplete,
    ReactiveFormsModule,
    DatePickerModule,
    DividerModule,
    SelectButtonModule,
    SelectModule
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
  stateOptions: any[] = [
    { label: 'Ida', value: 'Ida' },
    { label: 'Ida-Volta', value: 'Ida-Volta' }
  ];
  passageiroAdulto: Passageiro[] = passageiroLista;
  passageiroCrianca: Passageiro[] = passageiroLista;
  passageiroBabe: Passageiro[] = passageiroLista;
  airlines: Airline[] = airlineLista;

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
