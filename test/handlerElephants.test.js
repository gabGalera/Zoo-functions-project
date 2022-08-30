const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Testa se, na ausência de parâmetros, retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('Testa se o parâmetro é uma string', () => {
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('Testa se uma string aleatória retorna null', () => {
    expect(handlerElephants('xablau')).toBe(null);
  });

  it('Testa se o parâmetro count retorna o número de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('Testa se o parâmentro name retorna os nomes dos elefantes', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  it('Testa se a idade média está correta', () => {
    expect(handlerElephants('averageAge')).toEqual(10.5);
  });
  it('Testa se a função retorna os parâmetros de zoo_data', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
});
