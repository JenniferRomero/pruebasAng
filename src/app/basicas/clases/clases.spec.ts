import { Jugador } from "./clases";

describe('pruebas de clase', () => {

  let jugador = new Jugador();

  //cliclo de vida de las pruebas beforeAll, beforeEach, afterAll, AfterEach

  //beforeAll(), //Antes de que se ejecuten todas se ejecuta 1 vez
  //beforeEach(),// Antes de cada prueba
  //afterAll(), //Despues de que se ejecuten todas se ejecuta 1 vez
  //afterEach() // Despues de cada prueba

  beforeAll(() => {
    // console.log('beforeAll');
  });

  beforeEach(() => {
    // console.log('beforeEach');
    // jugador.hp = 100;
    jugador = new Jugador();
  });

  afterAll(() => {
    // console.log('afterAll');
  });

  afterEach(() => {
    // console.log('afterEach');
  });

  it('Debe de retornar 80 hp si recibe 20 de daño ', () => {
    const resp = jugador.recibeDanio(20);
    expect( resp ).toBe(80);
  });


  it('Debe de retornar 50 hp si recibe 50 de daño ', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(50);
    expect( resp ).toBe(50);
  });

  it('Debe de retornar 0 hp si recibe 100 de daño o mas', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(150);
    expect( resp ).toBe(0);
  });

});
