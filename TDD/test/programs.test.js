'use strict'; 
const { buildProgramsTable } = require('../js/db/programs');
const { getPrograms } = require('../js/models/Program');
const { assert: { equal, isFunction, isObject, isArray, notEqual, deepEqual } } = require('chai');

describe('programs model', () => {

  describe('getPrograms()', () => {
    it('should return an array of objects', () => {
      getPrograms()
      .then(data => {
        isArray(data);
        isObject(data[0]);
      })
    })
  })

})