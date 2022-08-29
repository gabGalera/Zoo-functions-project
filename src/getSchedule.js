const data = require('../data/zoo_data');

const op = Object.values(data.hours);

function getSchedule(st) {
  // seu código aqui
  const obj = {};
  Object.keys(data.hours).forEach((e, i) => {
    obj[e] = { officeHour: `Open from ${op[i].open}am until ${op[i].close}pm`,
      exhibition: data.species.map((e) => ({
        ava: e.availability,
        nome: e.name })).filter((el) => el.ava.includes(e)).map((el) => el.nome) };
  });
  obj.Monday.exhibition = 'The zoo will be closed!';
  obj.Monday.officeHour = 'CLOSED';
  if (st === 'Monday') { return { Monday: obj.Monday }; }
  if (Object.keys(data.hours).includes(st)) {
    return { [st]: Object.entries(obj).filter((entry) => entry[0] === st)[0][1] };
  }
  if (data.species.map((entry) => entry.name).includes(st)) {
    return data.species.filter((entry) => entry.name === st)[0].availability;
  }
  return obj;
}

module.exports = getSchedule;
