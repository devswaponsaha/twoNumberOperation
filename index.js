const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const square = (a) => a * a;
const cube = (a) => a * a * a;
const power = (a, b) => a ** b;
const mod = (a, b) => a % b;
const absolute = (a) => Math.abs(a);
const round = (a) => Math.round(a);
const floor = (a) => Math.floor(a);
const ceil = (a) => Math.ceil(a);
const random = (a) => Math.random(a);
const sin = (a) => Math.sin(a);
const cos = (a) => Math.cos(a);
const PI = 3.141592653589793;
const E = 2.718281828459045;
const log = (a) => Math.log(a);
const ln = (a) => Math.log(a);
const sqrt = (a) => Math.sqrt(a);
const cbrt = (a) => Math.cbrt(a);
const exp = (a) => Math.exp(a);
const min = (a, b) => Math.min(a, b);
const max = (a, b) => Math.max(a, b);
const sumOfArray = (arr) => arr.reduce((a, b) => a + b, 0);

module.exports = {E, PI, sum, subtract, multiply, divide, square, cube, power, mod, absolute, round, floor, ceil, random, sin, cos, log, ln, sqrt, cbrt, exp, min, max, sumOfArray}
