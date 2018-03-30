'use strict'; 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('acme.sqlite');
const { readFileSync } = require('fs');
const { customers } = JSON.parse(readFileSync('./data/customers.json'));

module.exports.buildCustomers = () => {
  return new Promise((resolve, reject) => {
    db.run(`DROP TABLE IF EXISTS customers`)
    .run(
      `CREATE TABLE IF NOT EXISTS customers (customer_id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, city TEXT, street TEXT, state TEXT, zip TEXT, phone TEXT)`
      ,(err) => { 
        if(err) return reject(err);
        resolve(insertRows());
      })
  })
}

const insertRows = () => {
  return Promise.all(customers.map(({ firstName, lastName, city, street, state, zip, phone }) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO customers VALUES (
        null, "${firstName}", "${lastName}","${city}","${street}","${state}","${zip}","${phone}")`
        , function(err) {
          if(err) return reject(err);
          resolve(this.lastID)
        });
    });
  }));
}
