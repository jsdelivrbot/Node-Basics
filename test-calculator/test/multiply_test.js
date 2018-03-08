'use strict';
const multiply = require('../app/scripts/multiply.js');
const { assert: { equal } } = require('chai');

describe('multiply()', () => {
  it('should return the product of 2 numbers', () => {
    equal(multiply([2, 3]), 6);
  })
})