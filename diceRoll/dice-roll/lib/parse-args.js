'use strict'; 

module.exports = (array) => {
  if(array.length < 1){
    return {
      'count': 1,
      'sides': 6
    }
  } else if(array.length == 1){
    return {
      'count': 1,
      'sides': array[0]
    }
  } else {
    return {
      'count': array[0],
      'sides': array[1]
    }
  }
}
