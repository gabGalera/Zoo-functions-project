const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se na ausência de dia e hora, retorna  a tabela de horários', () => {
    expect(getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
  it('Testa se está fechado na segunda.', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toMatch('The zoo is closed');
  });

  it('Testa se abre na terça.', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toMatch('The zoo is open');
  });

  it('Testa se fecha na quarta à noite.', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toMatch('The zoo is closed');
  });
  it('Testa se lança exceção quando o dia é escrito errado.', () => {
    expect(() => { getOpeningHours('Thu', '09:00-AM'); }).toThrow('The day must be valid. Example: Monday');
  });
  it('Testa se lança exceção quando a abreviação é escrita errado.', () => {
    expect(() => { getOpeningHours('Thursday', '09:00-ZM'); }).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Testa se lança exceção quando o horário é escrito errado.', () => {
    expect(() => { getOpeningHours('Thursday', 'C9:00-AM'); }).toThrow('The hour should represent a number');
  });
});
