'use strict'; 
const { buildProgramsTable } = require('../js/db/programs');
const { getPrograms, addProgram, getProgramById, removeProgram } = require('../js/models/Program');
const { assert: { equal, isFunction, isObject, isArray, notEqual, deepEqual } } = require('chai');

describe('programs model', () => {
  let firstProgram = {
    program_id: 1,
    course_category: 'Executive',
    instructor_name: 'Johnson',
    start_date: '2018-3-20',
    end_date: '2018-7-26',
    no_of_seats: 10
  };

  describe('getPrograms()', () => {
    it('should return an array of objects', () => {
      getPrograms()
      .then(data => {
        isArray(data);
        isObject(data[0]);
      })
    })

    it('should contain the first program object at index 0', () => {
      return getPrograms()
      .then(data => {
        deepEqual(data[0], firstProgram);
      })
    })
  })

  describe('getProgramById()', () => {
    it('should return an object', () => {
      return getProgramById({ id: 1 })
      .then(data => {
        isObject(data);
      })
    })
    
    it('should return the first program when passed 1 as an argument', () => {
      return getProgramById({ id: 1 })
      .then(data => {
        deepEqual(data,firstProgram);
      })
    })
  })

  describe('addProgram()', () => {
    let newProgram = {
        course_category: 'GYM&TAN',
        instructor_name: 'The Rock',
        start_date: 'Now',
        end_date: 'Never',
        no_of_seats: 1
      };

    // destroy/create new database before each test
    beforeEach((done) => {
      buildProgramsTable()
        .then(() => {
          done();
        })
    })

    it('should return an object', () => {
      return addProgram(newProgram)
        .then((data) => {
          isObject(data)
        })
    })

    it('should add a new program to database', () => {
      return addProgram(newProgram)
        .then(obj => {
          equal(6, obj.id);
        })
    })
  });

  describe('removeProgram()', () => {

    it('should remove a program from the database', () => {
      //remove program, then get program list to confirm deleted
      return removeProgram({ id: 3 })
      .then(data => {
        return getPrograms()
        .then(data => {
          let filteredArr = data.filter(program => {
            return program.program_id === 3;
          });
          //filtering by deleted id returns empty array
          equal(filteredArr.length, 0);
        })
      })
    })
  })

})