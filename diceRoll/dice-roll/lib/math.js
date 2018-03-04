'use strict'; 

const randomInt = (low, high) => {
  let result = 0;
  for(let i=0;i<low;i++){
    result += Math.floor(Math.random() * (high - low + 1)) + low;
  }
  return result;
}

module.exports = { randomInt };