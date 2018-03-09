const { createTables } = require('../scripts/database/makeTable');
const { getChildren,getToysdByName } = require('../scripts/getChildren');
const { assert: { isObject, isArray,deepEqual }} = require('chai');

describe('children module', () => {

  describe('getChildren()', () => {
    it('should return an array of objects', () => {
      return getChildren()
      .then((data) => {
        isArray(data);
        isObject(data[0]);
      })
    })
  })

  describe('getToysByName()',() => {
    it('should return an array of all toys for a given child', () => {
      return getToysdByName('Freddie')
      .then((data) => {
        isArray(data);
        deepEqual(data[0].toy, 'glove');
      })
    })
  })
});