import { Jugador2 } from './jugador2';



describe('jugador2 Emit ', () => {

  let jugador: Jugador2;

  beforeEach(() => jugador = new Jugador2 )

  it('Debe de emitir un evento cuando recibe daño ', () => {

    let newHP = 0;

    jugador.hpCambia.subscribe(hp => {
      newHP = hp;
    });

    jugador.recibeDanio(1000);

    expect( newHP ).toBe(0);
  });


  it('Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100 ', () => {

    let newHP = 0;

    jugador.hpCambia.subscribe(hp => newHP = hp );

    jugador.recibeDanio(50);

    expect( newHP ).toBe(50);
  });

});
