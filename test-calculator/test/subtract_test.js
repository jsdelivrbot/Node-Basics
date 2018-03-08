'use strict';
const subtract = require('../app/scripts/subtract.js');
const { assert: { equal } } = require('chai');

describe('subtract()', () => {
  it('should return the difference of 2 numbers', () => {
    equal(subtract([2, 3]), -1);
  })
})