'use strict'; 
const { createTables } = require('../scripts/database/makeTable');
const getChild = require('../scripts/toys/getChild');
const removeToy = require('../scripts/toys/removeToy')
const { assert: { equal,isObject,isArray,deepEqual,notEqual } } = require('chai');

describe('removeToy module', () => {

  describe('removeToy()', () => {
    let badChild = {
      name: 'Maury',
      toy: 'train'
    }
    //destroy/create new database before each test
    beforeEach((done) => {
      createTables()
        .then(() => {
          done();
        })
    })

    it('should should remove a given row from the database', () => {
      return removeToy(badChild)
        .then((data) => {
          //requesting getChild by deleted id should return empty array
          return getChild(3)
            .then((data) => {
              equal(0, data.length);
            })
        })
    })
  })

});