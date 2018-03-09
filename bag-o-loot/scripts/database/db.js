'use strict'; 
const sqlite3 = require('sqlite3').verbose();
const { createTables } = require('./makeTable');

(function createDb() {
  new sqlite3.Database('lootBag.sqlite', () => {
    createTables()
    .then((data) => {
      // console.log(data);
    })
    .catch(err => {
      console.log('OH SHIT!', err);
    })
  });
}());