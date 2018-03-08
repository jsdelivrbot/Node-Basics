import { resolve } from 'dns';

'use strict'; 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('acme.sqlite');

const errorHandler = (err) => {
  if (err) { console.log(`Msg: ${err}`) };
};

module.exports.getCustomers = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM customers`, (err, allRows)  => {
      errorHandler(err);
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
        errorHandler(err);
        resolve({ id: this.lastID });
      });
  })
}

module.exports.editCustomerFirstName = (newName, lastName) => {
  return new Promise((resolve, reject) => {
    db.run(`UPDATE customers SET first_name = '${newName}' 
    WHERE last_name = '${lastName}';`, (err, data) => {
      errorHandler(err);
      resolve(data);
    })
  })
}

module.exports.deleteCustomer = () => {
  return new Promise((resolve, reject) => {
    
  })
}
