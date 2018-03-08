'use strict';
const divide = require('../app/scripts/divide.js');
const { assert: { equal } } = require('chai');

describe('divide()', () => {
  it('should return the difference of 2 numbers', () => {
    equal(divide([2, 3]), 2/3);
  })
})