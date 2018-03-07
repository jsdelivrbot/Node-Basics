'use strict'; 

// module.exports = (array) => {
//   if(array.length < 1){
//     return {
//       'count': 1,
//       'sides': 6
//     }
//   } else if(array.length == 1){
//     return {
//       'count': 1,
//       'sides': array[0]
//     }
//   } else {
//     return {
//       'count': array[0],
//       'sides': array[1]
//     }
//   }
// }

module.exports = ([num, sides]) => {
  const dieNums = {};
  //if sides, count = num, else = 1
  dieNums.count = sides ? num : 1;
  //sides = sides(if exist) or num or 6
  dieNums.sides = sides || num || 6;
  return dieNums;
}
