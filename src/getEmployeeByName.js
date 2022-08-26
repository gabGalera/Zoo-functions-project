const data = require('../data/zoo_data');

function getEmployeeByName(en) {
  // seu código aqui
  const a = data.employees.filter((entry) => entry.firstName === en || entry.lastName === en);
  if (a.length > 0) {
    return a[0];
  }
  return {};
}

console.log(getEmployeeByName('Nelson'));
module.exports = getEmployeeByName;
