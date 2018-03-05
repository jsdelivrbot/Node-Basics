// Require in the Database method from the sqlite3 module
// We will be using the verbose execution mode, which will help with debugging errors.
const { Database } = require('sqlite3').verbose();

// Returns a new database object and automatically opens the database
// Changes will persist once connection closes
// Database method accepts a callback function for successful connection
const db = new Database('employeedb.sqlite', () => console.log('Connected')); 

// Passing in IF NOT EXISTS after CREATE TABLE will check to make sure there are no tables named 'employees'
// If it does exist, this line will not run
db.run('DROP TABLE IF EXISTS employeedb');
db.run('CREATE TABLE IF NOT EXISTS employeeDb (id INTEGER PRIMARY KEY, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT)');

//ERROR HANDLING
// errorHandler is a function which accepts an error object
const errorHandler = (err) => {
  if (err) { // If there is an error obj, it will be console logged
    console.log(`Msg: ${err}`);
  };
};
//insert records 
//create array of employee objects to dynamically add to db
const employeeArray = [
  {firstName: 'Fred', lastName: 'Smith', jobTitle: 'Cashier', address: '500 Somewhere Rd'},
  {firstName: 'Glinda', lastName: 'Johnson', jobTitle: 'Sales Rep', address: '501 Somehow Lane'},
  {firstName: 'Harry', lastName: 'Peters', jobTitle: 'Engineer', address: '502 Something St'},
  {firstName: 'Ilda', lastName: 'Simpson', jobTitle: 'Accountant', address: '503 Some Lane'},
  {firstName: 'John', lastName: 'Collins', jobTitle: 'Receptionist', address: '504 Somesome Ave'},
  {firstName: 'Karen', lastName: 'Carson', jobTitle: 'Manager', address: '505 Road Blvd'},
];
// Insert each of the employee objects into the database.
for(let emp of employeeArray){
  db.run(`INSERT INTO employeeDb VALUES (null,'${emp.firstName}','${emp.lastName}','${emp.jobTitle}','${emp.address}')`);
}

//QUERY the db
// Write a statement to query the database and console.log() all employee records
db.all("SELECT * FROM employeeDb", (err, allRows) => {
  errorHandler(err);
  // allRows is an array containing each row from the query
  allRows.forEach(each => {
    console.log(`${each.id} '${each.firstName} ${each.lastName}' ${each.jobTitle} '${each.address}'`);
  });
});

// query the database and console.log() each employees jobTitle.
db.all("SELECT jobTitle FROM employeeDb", (err, allRows) => {
  errorHandler(err);
  // allRows is an array containing each row from the query
  allRows.forEach(each => {
    console.log(`${each.jobTitle}`);
  });
});

// query the database and console.log() each employeeDb firstName, lastName and address only
db.all("SELECT firstName, lastName, address FROM employeeDb", (err, allRows) => {
  errorHandler(err);
  // allRows is an array containing each row from the query
  allRows.forEach(each => {
    console.log(`'${each.firstName} ${each.lastName}' ${each.address}`);
  });
});

// statement that returns all employees of a specified jobTitle
db.all("SELECT * FROM employeeDb WHERE jobTitle='Engineer'", (err, allRows) => {
  errorHandler(err);
  // allRows is an array containing each row from the query
  for(let row of allRows){
    console.log(`${row.id} '${row.firstName} ${row.lastName}' ${row.jobTitle} '${row.address}'`);
  }
});

// CLOSING THE DB
db.close(err => {
  errorHandler(err); // Use custom error handling function
  console.log('Database closed'); // Will only log on successful close
})
