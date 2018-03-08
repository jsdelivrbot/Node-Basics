'use strict'; 
const { argv: [, , ...args] } = process;
const equation = require('./parse-args')(args);

const solution = require(`./${equation.operator}`)([equation.num1, equation.num2]);

console.log(solution);