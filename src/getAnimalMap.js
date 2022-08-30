const data = require('../data/zoo_data');

const getLocation = () => {
  const duplicates = data.species
    .map((e) => e.location)
    .sort();
  const report = [];
  duplicates.forEach((e) => {
    if (!report.includes(e)) {
      report.push(e);
    }
  });
  return report;
};

const speciesToLocation = () => {
  const locations = getLocation();
  const report = {};
  locations.forEach((e) => {
    report[e] = [];
  });
  Object.keys(report).forEach((en) => {
    report[en] = data.species
      .filter((e) => e.location === en)
      .map((e) => e.name);
  });
  return report;
};

const getSpeciesNames = () => {
  const locations = speciesToLocation();
  const animals = data.species.map((e) => e.name);
  const animalNames = {};
  animals.forEach((e, i) => {
    animalNames[e] = data.species.map((en) => en.residents
      .map((entry) => entry.name))[i];
  });
  const report = {};
  Object.keys(locations).forEach((e) => {
    report[e] = locations[e]
      .map((en) => ({ [en]: animalNames[en] }));
  });

  return report;
};

const getSpeciesNamesSorted = () => {
  const locations = speciesToLocation();
  const animals = data.species.map((e) => e.name);
  const animalNames = {};
  animals.forEach((e, i) => {
    animalNames[e] = data.species.map((en) => en.residents
      .map((entry) => entry.name)
      .sort())[i];
  });
  const report = {};
  Object.keys(locations).forEach((e) => {
    report[e] = locations[e]
      .map((en) => ({ [en]: animalNames[en] }));
  });

  return report;
};

const getFemale = () => {
  const locations = speciesToLocation();
  const animals = data.species.map((e) => e.name);
  const animalNames = {};
  animals.forEach((e, i) => {
    animalNames[e] = data.species.map((en) => en.residents
      .filter((elem) => elem.sex === 'female')
      .map((entry) => entry.name))[i];
  });
  const report = {};
  Object.keys(locations).forEach((e) => {
    report[e] = locations[e]
      .map((en) => ({ [en]: animalNames[en] }));
  });

  return report;
};

const getMale = () => {
  const locations = speciesToLocation();
  const animals = data.species.map((e) => e.name);
  const animalNames = {};
  animals.forEach((e, i) => {
    animalNames[e] = data.species.map((en) => en.residents
      .filter((elem) => elem.sex === 'male')
      .map((entry) => entry.name))[i];
  });
  const report = {};
  Object.keys(locations).forEach((e) => {
    report[e] = locations[e]
      .map((en) => ({ [en]: animalNames[en] }));
  });

  return report;
};

const getFemaleSorted = () => {
  const locations = speciesToLocation();
  const animals = data.species.map((e) => e.name);
  const animalNames = {};
  animals.forEach((e, i) => {
    animalNames[e] = data.species.map((en) => en.residents
      .filter((elem) => elem.sex === 'female')
      .map((entry) => entry.name)
      .sort())[i];
  });
  const report = {};
  Object.keys(locations).forEach((e) => {
    report[e] = locations[e]
      .map((en) => ({ [en]: animalNames[en] }));
  });

  return report;
};

const getMaleSorted = () => {
  const locations = speciesToLocation();
  const animals = data.species.map((e) => e.name);
  const animalNames = {};
  animals.forEach((e, i) => {
    animalNames[e] = data.species.map((en) => en.residents
      .filter((elem) => elem.sex === 'male')
      .map((entry) => entry.name)
      .sort())[i];
  });
  const report = {};
  Object.keys(locations).forEach((e) => {
    report[e] = locations[e]
      .map((en) => ({ [en]: animalNames[en] }));
  });

  return report;
};

const testsForUndefined = (options) => {
  if (typeof options === 'undefined' || typeof options.includeNames === 'undefined') {
    return speciesToLocation();
  }
  return false;
};

const testsForMaleSorted = (options) => {
  if (options.includeNames === true && options.sex === 'male' && options.sorted === true) {
    return getMaleSorted();
  }
  return false;
};

const testsForFemaleSorted = (options) => {
  if (options.includeNames === true && options.sex === 'female' && options.sorted === true) {
    return getFemaleSorted();
  }
  return false;
};

const testsForMaleAndFemaleSorted = (options) => {
  if (testsForFemaleSorted(options) !== false) {
    return testsForFemaleSorted(options);
  }
  if (testsForMaleSorted(options) !== false) {
    return testsForMaleSorted(options);
  }
  if (options.includeNames === true && options.sorted === true) {
    return getSpeciesNamesSorted();
  }
  return false;
};

const testsForMaleAndFemale = (options) => {
  if (options.includeNames === true && options.sex === 'female') {
    return getFemale();
  }
  if (options.includeNames === true && options.sex === 'male') {
    return getMale();
  }
  return false;
};

function getAnimalMap(options) {
  // seu código aqui
  if (testsForUndefined(options) !== false) {
    return testsForUndefined(options);
  }
  if (testsForMaleAndFemaleSorted(options) !== false) {
    return testsForMaleAndFemaleSorted(options);
  }
  if (testsForMaleAndFemale(options) !== false) {
    return testsForMaleAndFemale(options);
  }
  return getSpeciesNames();
}

console.log(getAnimalMap({ includeNames: true, sex: 'male', sorted: true }));
module.exports = getAnimalMap;
