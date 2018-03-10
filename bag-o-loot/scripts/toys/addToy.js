'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lootBag.sqlite');

module.exports = ({ name, toy }) => {
  return new Promise ((resolve, reject) => {
    db.run(`INSERT INTO children 
    VALUES ( 
      null, "${name}", "${toy}", "null"
    )`, function (err) {
        if(err) { return reject(err)};
        resolve({ id: this.lastID });
        console.log('Toy added!');
      });
  })
}

