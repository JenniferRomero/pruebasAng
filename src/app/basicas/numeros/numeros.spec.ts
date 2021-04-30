import { incrementar } from "./numeros";


describe('pruebas de numeros', () => {

  it ('Debe retornar 100, si el numero ingresado es mayor a 100', () =>{
    const res = incrementar(300);
    expect( res ).toBe(100);
  });

  it ('Debe retornar el numero ingresado + 1, si no es mayor a 100', () =>{
    const res = incrementar(50);
    expect( res ).toBe(51);
  });

});
