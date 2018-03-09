'use strict'; 
const parseArgs = require('../app/scripts/parse-args.js');
const { assert: { deepEqual,isObject,equal,isFunction } } = require('chai');

describe('parseArgs()', () => {
  it('should return an object', () => {
    isObject(parseArgs([2,'/', 3]));
  });

  it('should separate 3 arguments into num1 num2 operator',() => {
    let args = ['1', 'x', '2'];
    deepEqual(parseArgs(args),{num1: 1, num2: 2, operator: 'multiply'});
  })

  it(`should call printInstructions and return undefined if number of arguments != 3,
      OR if second argument is not an operator (+,-,/,*)`
      , () => {
    equal(parseArgs([]), undefined);
    equal(parseArgs(['1','plus','2']), undefined);
  })

})