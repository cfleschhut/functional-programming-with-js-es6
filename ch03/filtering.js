const numbers = [1, 2, 3, 4, 5, 6, 7];
const words = ['lorem', 'ipsum', 'dolor', 'sit', 'amet'];

const isEven = (x) => x % 2 === 0;
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

const createLengthTest = (minLength) => (word) => word.length > minLength;

const longWords = words.filter(createLengthTest(4));

console.log(longWords);
