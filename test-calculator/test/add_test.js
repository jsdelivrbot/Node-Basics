'use strict'; 
const add = require('../app/scripts/add.js');
const { assert: { equal }} = require('chai');

describe('add()', () => {
  it('should return the sum of 2 numbers', () => {
    equal(add([2,3]), 5);
  })
})