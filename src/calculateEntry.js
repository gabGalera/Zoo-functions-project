const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui
  const obj = {
    child: entrants.filter((entry) => entry.age < 18).length,
    adult: entrants.filter((entry) => entry.age >= 18 && entry.age < 50).length,
    senior: entrants.filter((entry) => entry.age >= 50).length,
  };

  return obj;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (typeof entrants === 'undefined' || Object.keys(entrants).length === 0) {
    return 0;
  }
  const arr = [data.prices.child, data.prices.adult, data.prices.senior];
  const obj = countEntrants(entrants);
  return arr[0] * obj.child + arr[1] * obj.adult + arr[2] * obj.senior;
}

module.exports = { calculateEntry, countEntrants };
