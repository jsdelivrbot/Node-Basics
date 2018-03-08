const { createTables } = require('../js/makeTable');
const { getCustomers,addCustomer,editCustomerFirstName,deleteCustomerById } = require('../js/customers');
const { assert: { equal,isFunction,isObject,isArray,notEqual } } = require('chai');

describe('read', () => {
  it('should be equal', () => {
    equal(3, 1+2);
  })
})

describe('customers module', () => {

  describe('getCustomers()', () => {
    it('should return an array of objects', () => {
      getCustomers()
      .then((data) => {
        isArray(data);
        isObject(data[0]);
      })
    })
  });

  describe('addCustomer()', () => {
    let newCustomer = {
      firstName: 'Pat', lastName: 'Smith',
      city: 'Nowhere', state: 'Alabama',
      street: '2700 Hug-a-cousin Lane',
      zip: '122333', phone: '111-000-1234',
    }
    //destroy/create new database before each test
    beforeEach((done) => {
      createTables()
      .then(() => {
        done();
      })
    })

    it('should return an object', () => {
      return addCustomer(newCustomer)
      .then((data) => {
        isObject(data);
      })
    })

    it('should add a new customer to database', () => {
      return addCustomer(newCustomer)
      .then(obj => {
        equal(9, obj.id);
      })
    })
  });

  describe('editCustomer()', () => {
    beforeEach((done) => {
      createTables()
      .then(() => {
        done();
      })
    })
    it("should update a customer's information in the database", () => {
      //edit customer name then get data to confirm change
      editCustomerFirstName('Frank','Smith')
      .then(() => {
        getCustomers()
        .then(data => {
          notEqual(data[0].first_name, 'Fred');
          equal(data[0].first_name, 'Frank');
        })
      })
    })
  })

  describe('deleteCustomer()', () => {
    beforeEach((done) => {
      createTables()
        .then(() => {
          done();
        })
    })
    it('should remove a customer from the database', () => {
      //remove customer, then get customer list to confirm deleted
      deleteCustomerById(3)
      .then(data => {
        getCustomers()
        .then(data => {
          let filteredArr = data.filter(customer => {
            return customer.customer_id === 3;
          });
          //filtering by deleted id returns empty array
          equal(filteredArr.length, 0);
        })
      })
    })
  })

});
