const data = require('../data/zoo_data');

const location = (id) => {
  const dados = data.employees.filter((e) => e.id === id)[0].responsibleFor;
  const locations = [];

  dados.forEach((e) => {
    locations.push(data.species.filter((en) => en.id === e)[0].location);
  });
  return locations;
};

const specie = (id) => {
  const dados = data.employees.filter((e) => e.id === id)[0].responsibleFor;
  const species = [];

  dados.forEach((e) => {
    species.push(data.species.filter((en) => en.id === e)[0].name);
  });
  return species;
};

const lista = [];
const objeto = (i) => ({
  id: data.employees[i].id,
  fullName: `${data.employees[i].firstName} ${data.employees[i].lastName}`,
  locations: location(data.employees[i].id),
  species: specie(data.employees[i].id),
});

data.employees.forEach((entry, index) => {
  lista.push(objeto(index));
});

const validation = (d) => {
  if (d === undefined) {
    return true;
  }
  if (Object.keys(d).includes('id')) {
    const ids = lista
      .map((e) => e.id)
      .some((e) => e === d.id);
    return ids;
  }
  if (Object.keys(d).includes('name')) {
    const names = lista
      .map((e) => e.fullName.split(' '))
      .some((e) => e[0] === d.name || e[1] === d.name);
    return names;
  }
};

const throwError = (d) => {
  if (validation(d) !== true) {
    throw new Error('Informações inválidas');
  }
};

function getEmployeesCoverage(d) {
  // seu código aqui
  try {
    throwError(d);
    if (d === undefined) {
      return lista;
    }
    if (Object.keys(d).includes('id')) {
      return lista
        .filter((e) => e.id === d.id)[0];
    }
    if (Object.keys(d).includes('name')) {
      const n = lista
        .filter((e) => e.fullName.split(' ')[0] === d.name || e.fullName.split(' ')[1] === d.name);
      return n[0];
    }
  } catch (e) {
    throw e.message;
  }
}

// console.log(validation({ name: ' ' }));
// console.log(getEmployeesCoverage({ id: 'Id inválido' }));

module.exports = getEmployeesCoverage;
