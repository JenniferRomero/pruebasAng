import { FormularioRegister } from "./formulario";
import { FormBuilder } from '@angular/forms';


describe('formularios', () => {

  let componente: FormularioRegister;

  beforeEach(() => {

    componente = new FormularioRegister( new FormBuilder);
  });

  it('Debe de crear un formulario con dos campos ', () => {

    expect( componente.form.contains('email') ).toBeTruthy();
    expect( componente.form.contains('password') ).toBeTruthy();

  });


  it('El email debe de ser obligatorio ', () => {

    const control = componente.form.get('email');
    control.setValue('');

    expect( control.valid ).toBeFalsy();

  });


  it('El email debe de ser email valido ', () => {

    const control = componente.form.get('email');
    control.setValue('jennifer@gmail.com');

    expect( control.valid ).toBeTruthy();

  });


});
