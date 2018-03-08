'use strict'; 

const printInstructions = () => {
  console.log("Please enter equation in the following format: '1 + 2', using: x , / , - , +");
  process.exit();
}

module.exports = (array) => {
  const equation = {};
  if(array.length != 3){
    printInstructions();
    return false;

  } else if (array[1]!='x' && array[1]!='+' && array[1]!='-' && array[1]!='/'){
    printInstructions();
    return false;

  } else {
    equation.num1 = +array[0];
    equation.num2 = +array[2];
    equation.operator = array.includes('x')?'multiply' : array.includes('+')?'add' : array.includes('/')?'divide' : 'subtract';
  }
  return equation;
}