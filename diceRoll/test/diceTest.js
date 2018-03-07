'use strict';
const { roll,toDiceNotation } = require('../dice-roll/lib/dice.js');
const { assert: { isFunction,isString,isNotNaN,oneOf } } = require('chai');

describe('dice module', () => {
  describe('roll()', () => {
    it('should be a function', () => {
      isFunction(roll);
    })

    it('should return a number', () => {
      let result = roll('2d6');
      isNotNaN(result);
    })

    it('should accept a string and return a number', () => {
      for (let i = 1; i < 10; i++) {
        let diceNotation = `${i}d6`;
        oneOf(roll(diceNotation), Array.from(Array(61).keys()));
      }
    })
  });

  describe('toDiceNotation()',() => {
    it('should return a string', () => {
      isString(toDiceNotation({ count: 3.1, sides: '2' }));
      isString(toDiceNotation({ count: 1, sides: '2.3' }));
    })
  })

})
