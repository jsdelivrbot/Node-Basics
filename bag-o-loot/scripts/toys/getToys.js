'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lootBag.sqlite');

module.exports = ({name}) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT toy FROM children WHERE name = "${name}"`, (err, allRows) => {
      if (err) { return reject(err) };
      resolve(allRows);
      console.log(allRows);
    })
  })
};
