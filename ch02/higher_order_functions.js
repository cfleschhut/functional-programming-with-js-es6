const divide = (x, y) => x / y;

const secondArgumentsIsntZero = (func) => (...args) => {
  if (args[1] === 0) {
    console.log('Error: dividing by zero');
    return null;
  }

  return func(...args);
};

const divideSafe = secondArgumentsIsntZero(divide);

console.log(divideSafe(1, 0));
console.log(divideSafe(1, 2));
