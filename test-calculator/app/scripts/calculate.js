'use strict'; 
const { argv: [, , ...args] } = process;
const equation = require('./parse-args')(args);