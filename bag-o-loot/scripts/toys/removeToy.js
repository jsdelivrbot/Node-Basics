'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lootBag.sqlite');

module.exports = ({ name, toy }) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM children 
    WHERE name = "${name}" AND toy = "${toy}"`
    , function (err, data) {
        if (err) { return reject(err) };
        resolve(data);
        console.log('Toy removed!');
      });
  })
}