/* eslint-disable max-lines-per-function */
const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const resultado = data.employees
    .map((entry) => entry.managers)
    .map((entry) => entry.some((elemento) => elemento === id));
  // const a = data.employees.some((entry) => entry.managers === id);
  return resultado.some((entry) => entry === true);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) !== true) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    return data.employees
      .reduce((acc, curr) => {
        curr.managers.map((entry) => (entry === managerId ? acc.push(curr) : acc));
        return acc;
      }, []).map((entry) => `${entry.firstName} ${entry.lastName}`);
  } catch (error) {
    return error.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
