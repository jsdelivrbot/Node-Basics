const { createTables } = require('../scripts/database/makeTable');
const { addToy } = require('../scripts/toys/addToy');
const { getChildById } = require('../scripts/getChildren');
const { assert: { equal,isObject,isArray,deepEqual } } = require('chai');

describe('addToy module', () => {

  describe('addToy()', () => {
    let newChild = {
      name: 'Oswald',
      toy: 'slinky'
    }
    //destroy/create new database before each test
    beforeEach((done) => {
      createTables()
        .then(() => {
          done();
        })
    })

    it('should return object', () => {
      return addToy(newChild)
        .then((data) => {
          isObject(data);
        })
    })

    it('should add a child and toy as a new row in the database', () => {
      return addToy(newChild)
        .then((data) => {
          return getChildById(data.id)
          .then((data) => {
            deepEqual([data[0].name,data[0].toy],['Oswald','slinky']);
          })
        })
    })
  })

});