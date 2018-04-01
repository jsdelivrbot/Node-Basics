'use strict'; 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('acme.sqlite');

module.exports.getCustomers = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM customers`, (err, allRows)  => {
      if(err) return reject(err);
      resolve(allRows);
    })
  })
}

module.exports.addCustomer = ({ firstName,lastName,city,street,state,zip,phone }) => {
  return new Promise((resolve, reject) => {
    db.run(`INSERT INTO customers VALUES (
      null,
      "${firstName}", "${lastName}",
      "${city}","${street}",
      "${state}",
      "${zip}",
      "${phone}")`, 
      function (err) {
        if(err) return reject(err);
        resolve({ id: this.lastID });
      });
  })
}

module.exports.editCustomerFirstName = (newName, lastName) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE customers SET first_name = '${newName}' 
    WHERE last_name = '${lastName}';`, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    })
  })
}

module.exports.deleteCustomerById = (id) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM customers WHERE customer_id=${id}`, (err, data) => {
      if(err) return reject(err);
      resolve(data);
    })
  })
}
