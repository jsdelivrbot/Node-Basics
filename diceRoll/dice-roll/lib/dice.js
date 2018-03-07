'use strict'; 
const { randomInt } = require('./math.js');

const toDiceNotation = ({count, sides}) => {
  return `${count.toString()}d${sides.toString()}`;
};

const roll = (string) => {
  let low = +string.slice(0, string.indexOf('d'));
  let high = +string.slice(string.indexOf('d') + 1);
  console.log('low',low,'high',high);
  return randomInt(low,high);
};

module.exports = { toDiceNotation, roll };