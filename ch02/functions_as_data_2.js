const double = (x) => x * 2;
const subtractOne = (x) => x - 1;
const triple = (x) => x * 3;

const functionsArray = [double, subtractOne, triple, Math.sqrt];

let number = 2;

functionsArray.forEach((func) => (number = func(number)));

console.log(number);
