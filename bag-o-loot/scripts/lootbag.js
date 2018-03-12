'use strict'; 
const { argv: [, , ...args] } = process;
const instructions = require('./parse-args')(args);
const result = require(`./toys/${instructions.task}`)(instructions);

