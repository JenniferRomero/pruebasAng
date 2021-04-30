import { mensaje } from "./string";


describe('pruebas de strings', () => {

  it('Debe regresar un string ', () => {
    const resp = mensaje('Jennifer');

    //expect( typeof resp === 'string')
    expect( typeof resp ).toBe('string');
  });


  it('Debe de retornar un saludo con el nombre enviado ', () => {
    const nombre = 'Pedro'
    const resp = mensaje(nombre);

    expect( resp ).toContain(nombre);

  });

});
