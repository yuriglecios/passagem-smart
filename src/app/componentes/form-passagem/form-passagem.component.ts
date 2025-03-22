import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AutoComplete } from 'primeng/autocomplete';
import { aeroportosLista, Aeroporto } from '../../model/aeroportos-lista';

@Component({
  selector: 'app-form-passagem',
  imports: [
    FormsModule,
    AutoComplete
  ],
  templateUrl: './form-passagem.component.html',
  styleUrl: './form-passagem.component.css'
})
export class FormPassagemComponent {
  passagemForm: FormGroup;
  aeroportos: Aeroporto[] = aeroportosLista;
  filteredAirports: Aeroporto[] = [];
  origemValue: any;
  destinoValue: any;

  search(event: {query: string}){
    this.filteredAirports = this.aeroportos.filter(aeroporto =>
      aeroporto.name.toLowerCase().includes(event.query.toLowerCase()) ||
      aeroporto.iataCode.toLowerCase().includes(event.query.toLowerCase())
    )
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

}
