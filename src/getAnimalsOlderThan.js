const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const a = data.species.filter((entry) => entry.name === animal);
  return a[0].residents.every((entry) => entry.age > age);
}

module.exports = getAnimalsOlderThan;
