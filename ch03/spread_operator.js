const person = {
  name: 'Jimmy Smith',
  age: 40,
  hairColor: 'brown',
  eyeColor: 'blue',
};

const careerData = {
  title: 'developer',
  company: 'ABC software',
};

const personWithCareerData = {
  name: person.name,
  ...careerData,
};

console.log(personWithCareerData);

const numbers = [1, 2, 3];
const newNumbers = [0, ...numbers, 4];

console.log(newNumbers);
