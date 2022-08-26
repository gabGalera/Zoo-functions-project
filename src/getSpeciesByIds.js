const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const b = ids.map((entry) => data.species
    .filter((element) => element.id === entry))
    .map((entry) => {
      const [d] = entry;
      return d;
    });
  return b;
}

module.exports = getSpeciesByIds;
