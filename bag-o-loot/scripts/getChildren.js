'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lootBag.sqlite');

module.exports.getChildren = () => {
  return new Promise((resolve,reject) => {
    db.all(`SELECT * FROM children`, (err, allRows) => {
      if(err) { return reject(err) };
      resolve(allRows);
    })
  })
};

module.exports.getToysdByName = (name) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT toy FROM children WHERE name = "${name}"`, (err,allRows) => {
      if(err) { return reject(err) };
      resolve(allRows);
    })
  })
}

  module.exports.getChildById = (id) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM children WHERE child_id = ${id}`, (err,allRows) => {
      if(err) { return reject(err) };
      resolve(allRows);
    })
  })
}