/* eslint-disable max-lines-per-function */
const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui

  const animals = data.species
    .map((entry) => entry.name);

  const weekDays = Object.keys(data.hours);
  const openClose = Object.values(data.hours);
  const obj = {};
  const exhibition = data.species.map((entry) => ({
    ava: entry.availability,
    nome: entry.name,
  }));

  weekDays
    .forEach((entry, index) => {
      obj[entry] = {
        officeHour: `Open from ${openClose[index].open}am until ${openClose[index].close}pm`,
        exhibition: exhibition
          .filter((elemento) => elemento.ava.includes(entry))
          .map((elemento) => elemento.nome) };
    });

  obj.Monday.exhibition = 'The zoo will be closed!';
  obj.Monday.officeHour = 'CLOSED';

  if (scheduleTarget === 'Monday') {
    return { Monday: obj.Monday };
  }

  if (weekDays.includes(scheduleTarget)) {
    return {
      [scheduleTarget]: Object.entries(obj).filter((entry) => entry[0] === scheduleTarget)[0][1],
    };
  }

  if (animals.includes(scheduleTarget)) {
    return data.species
      .filter((entry) => entry.name === scheduleTarget)[0].availability;
  }
  return obj;
}

module.exports = getSchedule;
