import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentoPassagemComponent } from './orcamento-passagem.component';

describe('OrcamentoPassagemComponent', () => {
  let component: OrcamentoPassagemComponent;
  let fixture: ComponentFixture<OrcamentoPassagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrcamentoPassagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrcamentoPassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
