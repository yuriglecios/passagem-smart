import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPassagemComponent } from './form-passagem.component';

describe('FormPassagemComponent', () => {
  let component: FormPassagemComponent;
  let fixture: ComponentFixture<FormPassagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormPassagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPassagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
