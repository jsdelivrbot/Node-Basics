const { getToysByName } = require('../scripts/toys/getToys');
const { assert: { isObject, isArray, deepEqual } } = require('chai');


describe('getToysByName()', () => {
  it('should return an array of all toys for a given child', () => {
    return getToysByName({name:'Freddie'})
      .then((data) => {
        isArray(data);
        deepEqual(data[0].toy, 'glove');
      })
  })
});