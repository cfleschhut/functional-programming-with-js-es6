const add = (x, y, z) => x + y + z;

const args = [1, 2, 3];

console.log(add.apply(null, args));
console.log(add(...args));
console.log(add.bind(null, args[0])(...args.slice(1)));
