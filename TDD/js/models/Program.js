'use strict';
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('acme.sqlite');

module.exports.getPrograms = () => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM programs`, (err, allRows) => {
      if (err) return reject(err);
      resolve(allRows);
    })
  })
}

module.exports.getProgramById = ({ id }) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM programs
    WHERE program_id=${id}`, (err, program) => {
      if(err) return reject(err);
      resolve(program);
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
        if (err) return reject(err);
        resolve({ id: this.lastID })
      });
  })
}

module.exports.removeProgram = ({ id }) => {
  return new Promise((resolve, reject) => {
    db.run(`DELETE FROM programs WHERE program_id=${id}`, 
    function(err){
      if(err) return reject(err);
      resolve({changes: this.changes});
    })
  })
}
