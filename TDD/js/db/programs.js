'use strict'; 
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('acme.sqlite');
const { readFileSync } = require('fs');
const { programs } = JSON.parse(readFileSync('./data/programs.json'));

module.exports.buildProgramsTable = () => {
  return new Promise((resolve, reject) => {
    db.run(`DROP TABLE IF EXISTS programs`)
    .run(
      `CREATE TABLE IF NOT EXISTS programs (
        program_id INTEGER PRIMARY KEY,
        course_category TEXT,
        instructor_name TEXT,
        start_date TEXT,
        end_date TEXT,
        no_of_seats INTEGER
      )`, (err) => {
        if(err) return reject(err);
        resolve(insertPrograms());      
    })
  })
}

const insertPrograms = () => {
  Promise.all(programs.map(({ course_category, instructor_name, start_date, end_date, no_of_seats }) => {
    return new Promise((resolve, reject) => {
      db.run(`INSERT INTO programs VALUES (
        ${null}, "${course_category}", "${instructor_name}","${start_date}","${end_date}","${no_of_seats}")`
        , function (err) {
          if (err) return reject(err);
          resolve(this.lastID)
        });
    });
  }));
}
