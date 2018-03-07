'use strict';
const { randomInt } = require('../dice-roll/lib/math.js');
const { assert: { isFunction,isNumber,oneOf,notEqual } } = require('chai');

describe('math module', () => {
  describe('randomInt()', () => {
    it('should be a function', () => {
      isFunction(randomInt);
    })

    it('should return a number', () => {
      isNumber(randomInt());
      for(let i=0; i<1000;i++){
        oneOf(randomInt(1,6),[1,2,3,4,5,6]);
      }
    })

    it('should handle args that are not numbers', () => {
      oneOf(randomInt("1",6),[1,2,3,4,5,6]);
      oneOf(randomInt("1","6"),[1,2,3,4,5,6]);
      oneOf(randomInt(1,"6"),[1,2,3,4,5,6]);
    })

    it('should not equal numbers outside range', () => {
      for (let i = 0; i < 1000; i++) {
        notEqual(randomInt(1,8),9);
      }
    })
  })

})
