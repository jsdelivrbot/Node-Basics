'use strict'; 
const { getPrograms, getProgramById, addProgram, removeProgram } = require('./models/Program');
const prompt = require('prompt');

const schema = {
  properties: {
    method: {
      description: `Welcome the the Bangazon Continuing Ed Course Creator
      Please choose an action from the following
      1 create a new course
      2 retrieve a list of courses
      3 retrieve a single course
      4 remove a course
      By entering the appropriate number (1-4)`,
      pattern: /^[1-4]+$/,
      message: 'Input must be an integer (1-4)',
      required: true
    }
  }
};

const schemas = {

  1: {
    properties: {
      course_category: {
        description: `Enter the course name`,
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be a string containing only letters',
        required: true
      },
      instructor_name: {
        description: `Enter the intructor name`,
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be a string containing only letters',
        required: true
      },
      start_date: {
        description: `Enter the start date`,
        pattern: /^(19|20)[0-9]{2}[- /.]([1-9]|1[012])[- /.]([1-9]|[12][0-9]|3[01])$/,
        message: 'Date must be in the correct format YYYY-M-D',
        required: true
      },
      end_date: {
        description: `Enter the end date`,
        pattern: /^(19|20)[0-9]{2}[- /.]([1-9]|1[012])[- /.]([1-9]|[12][0-9]|3[01])$/,
        message: 'Date must be in the correct format YYYY-M-D',
        required: true
      },
      no_of_seats: {
        description: `Enter the number of seats`,
        pattern: /^\d+$/,
        message: 'Must be an integer',
        required: true
      }
    }
  },

  2: {
    properties: {
      name: {
        description: `Please press ENTER to continue or CTRL C to exit`
      }
    }
  },

  3: {
    properties: {
      id: {
        description: `Enter the course id`,
        pattern: /^\d+$/,
        message: 'Input must be an integer',
        required: true
      }
    }
  },

  4: {
    properties: {
      id: {
        description: `Enter the course id`,
        pattern: /^\d+$/,
        message: 'Input must be an integer',
        required: true
      }
    }
  }
}

const methods = { 1: addProgram, 2: getPrograms, 3: getProgramById, 4: removeProgram };

prompt.start();

// Get method selection from the user: get, add, delete
prompt.get(schema, (err, result) => {
  prompt.get(schemas[+result.method], (err, input) => {
    methods[+result.method](input)
    .then(data => {
      console.log(`Here are the program(s)/changes you requested:\n`, data);
    })
  })
});