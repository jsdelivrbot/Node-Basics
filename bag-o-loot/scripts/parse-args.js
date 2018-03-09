'use strict'; 
const printInstructions = () => {
  console.log("Please use the following format: 'add/remove [toy] [name]'=> add truck Suzy, ls, ls Suzy, delivered Suzy");
  process.exit();
}

module.exports = (array) => {
  const instructions = { name: 'null', toy: 'null'};
  if(array.length === 3){
    instructions.task = array.includes('add')?'addToy' : array.includes('remove')?'removeToy' : printInstructions();
    instructions.toy = array[1];
    instructions.name = array[2];
  } 
  else if (array.length === 1){
    instructions.task = array.includes('ls')?'getChildren' : printInstructions();
  } 
  else if (array.length === 2){
    instructions.task = array.includes('ls')?'getToysByName' : array.includes('delivered')?'deliverToy' : printInstructions();
    instructions.name = array[1];
  }
  else { printInstructions() };
  return instructions;
}