import { usuarioIngresado } from "./booleanos";


describe('pruebas de booleanos', () => {

  it ('Debe retornar true', () =>{
    const res = usuarioIngresado();
    //expect( res ).toBe(true);
    //expect( res ).toBeFalsy();
    //expect( res ).not.toBeTruthy();
    expect( res ).toBeTruthy();
  });

});
