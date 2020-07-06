const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = (func) => func(2, 3);

combine2and3(add);
combine2and3(subtract);
combine2and3(Math.max);
