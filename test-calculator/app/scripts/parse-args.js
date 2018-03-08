'use strict'; 

const printInstructions = () => {
  console.log("Please enter your calculation in one of the following formats: '1 + 2' or '1+2'");
  return false;
}

module.exports = (array) => {
  const equation = {};
  if(array.length != 1 && array.length != 3){
    printInstructions();
    return false;
  } else {
    equation.num1 = +array[0];
    equation.num2 = +array[2];
    equation.operator = array[1];
  }
  return equation;
}