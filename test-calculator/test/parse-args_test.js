'use strict'; 
const rewire = require('rewire');
const parseArgs = require('../app/scripts/parse-args.js');
// const parseModule = rewire('../app/scripts/parse-args.js');
// const printInstructions = parseModule.__get__('printInstructions');

// const spies = require('chai-spies');
const { assert: { deepEqual,isObject,equal,isFunction } } = require('chai');

describe('parseArgs()', () => {
  it('should return an object', () => {
    isObject(parseArgs([2]));
    isObject(parseArgs(['2+2']));
    isObject(parseArgs([2,'/', 3]));
  });

  it('should separate 3 arguments into num1 num2 operator',() => {
    let args = ['1', '+', '2'];
    deepEqual(parseArgs(args),{num1: 1, num2: 2, operator: '+'});
  })

  it('should call printInstructions if number of arguments != 1 OR 3', () => {
    equal(parseArgs([]), false);
  })
  
  // it('should parse a single argument into num1 num2 operator',() => {
  //   let args = ['1+2'];
  //   deepEqual(parseArgs(args),{num1: 1, num2: 2, operator: '+'});
  // })

})