const getChildren = require('../scripts/toys/getChildren');
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

});