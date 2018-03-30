'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('acme.sqlite');

const errorHandler = (err) => {
  if (err) { console.log(`Msg: ${err}`) };
};

module.exports.getPrograms = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM programs`, (err, allRows) => {
      errorHandler(err);
      resolve(allRows);
    })
  })
}

module.exports.addProgram = ({course_category, instructor_name, start_date, end_date, no_of_seats}) => {
  return new Promise((resolve, rejects) => {
    db.run(`INSERT INTO programs VALUES (
      ${null},
      "${course_category}",
      "${instructor_name}",
      "${start_date}",
      "${end_date}",
      ${no_of_seats})`, 
      function(err){
        errorHandler(err);
        resolve({ id: this.lastID })
      });
  })
}
