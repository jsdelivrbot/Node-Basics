'use strict'; 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/mediaStore.sqlite');

module.exports.getAll = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM directors`, (err, direx) => {
      if (err) { return reject(err) };
      resolve(direx);
    });
  })
};

module.exports.getOne = (id) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT directors.*, group_concat(movies.name, ", ") movies
    FROM directors
    JOIN movies ON dir_id = director_id
    WHERE dir_id=${id}`, (err, direx) => {
      if (err) { return reject(err) };
      resolve(direx);
    });
  })
};

