/* eslint-disable max-lines-per-function */
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const obj = {};
  if (typeof animal === 'undefined') {
    data.species
      .map((entry) => entry.name)
      .forEach((entry, index) => {
        obj[entry] = data.species.map((elemento) => elemento.residents.length)[index];
        return obj;
      });
    return obj;
  } if (typeof animal.sex !== 'undefined') {
    return data.species
      .filter((entry) => entry.name === animal.specie)[0]
      .residents
      .filter((entry) => entry.sex === animal.sex).length;
  }
  return data.species.filter((entry) => entry.name === animal.specie)[0].residents.length;
}

console.log(countAnimals({ specie: 'lions' }));

module.exports = countAnimals;
