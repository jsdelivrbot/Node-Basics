'use strict'; 
const { addToy,deliverToy } = require('./toys/addToy');
const { getToysByName } = require('./toys/getToys');
const { removeToy } = require('./toys/removeToy');
const { getChildren,getChildById } = require('./getChildren');
// const db = require('./database/db.js');

const { argv: [, , ...args] } = process;
const instructions = require('./parse-args')(args);

switch (instructions.task) {
  case "addToy": addToy(instructions); break;
  case "deliverToy": deliverToy(instructions); break;
  case "getToysByName": getToysByName(instructions); break;
  case "removeToy": removeToy(instructions); break;
  case "getChildren": getChildren(); break;
}
