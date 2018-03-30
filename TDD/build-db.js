'use strict'; 
const sqlite3 = require('sqlite3').verbose();
const { buildCustomers } = require('./js/db/customers');
const { buildProgramsTable } = require('./js/db/programs');

(function createDb() {
  new sqlite3.Database('acme.sqlite', () => {
    buildCustomers()
    .then(data => {
      console.log(data);
      buildProgramsTable();
    })
    .catch((err) => {
      console.log('oops', err);
    })
  });
}());