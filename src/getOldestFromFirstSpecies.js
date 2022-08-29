const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const firstAnimal = data.employees.filter((e) => e.id === id)[0].responsibleFor[0];
  const specieResidents = data.species.filter((e) => e.id === firstAnimal)[0].residents;
  return Object.values(specieResidents.sort((a, b) => b.age - a.age)[0]);
}

module.exports = getOldestFromFirstSpecies;
