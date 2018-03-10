'use strict'; 
// const db = require('./database/db.js');
const { argv: [, , ...args] } = process;
const instructions = require('./parse-args')(args);
const result = require(`./toys/${instructions.task}`)(instructions);

