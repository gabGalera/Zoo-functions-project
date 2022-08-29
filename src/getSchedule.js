const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  // seu código aqui
  return data.species
    .filter((entry) => entry.name === scheduleTarget)[0].availability;
}

console.log(getSchedule('tigers'));
module.exports = getSchedule;
