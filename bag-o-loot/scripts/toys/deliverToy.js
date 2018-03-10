'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lootBag.sqlite');


module.exports = ({ name }) => {
  let date = new Date;
  return new Promise((resolve, reject) => {
    db.run(`UPDATE children SET delivered = "${date.toLocaleDateString()}"
    WHERE name = "${name}"`,
      (err, data) => {
        if (err) { return reject(err) };
        resolve(data);
        console.log('Toy delivered!');
      })
  })
}
