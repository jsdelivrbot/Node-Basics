'use strict';
const parseArgs = require('../dice-roll/lib/parse-args.js');
const { assert: { isNotNaN,isObject,equal,deepEqual } } = require('chai');

describe('parse-args module', () => {
  describe('parseArgs()', () => {
    it('should return an object', () => {
      isObject(parseArgs(['2',3]));
      isObject(parseArgs([2,3]));
      isObject(parseArgs([2,'3']));
      isObject(parseArgs([]));
    })

    it('should defualt to {count: 1, sides: 6}', () => {
      deepEqual(parseArgs([]), { count: 1, sides: 6 });
    })
  });

})