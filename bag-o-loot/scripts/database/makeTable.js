'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lootBag.sqlite');
const { children } = require('../data/childrenData');

module.exports.createTables = () => {
  return new Promise((resolve, reject) => {
    db.run(`DROP TABLE IF EXISTS children`)
      .run(
      `CREATE TABLE IF NOT EXISTS children (child_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, toy TEXT, delivered TEXT)`
      , (err) => {
        if (err) {return reject(err)};
        resolve(insertRows());
      })
  })
}

const insertRows = () => {
  return Promise.all(children.map(({ name, toy, delivered }) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO children VALUES (null, "${name}","${toy}","${delivered}")`, function (err) {
        if (err) {return reject(err)};
        resolve(this.lastID)
      });
    });
  }));
}