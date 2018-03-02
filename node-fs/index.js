#!/usr/bin/env node

//-------- SYNCHRONOUS VERSION ---------//
// const { readFileSync } = require('fs');

// const fileArg = process.argv[2];
// const [,,fileArg] = process.argv;

// if (fileArg) {
//   try {
//     const data = readFileSync(fileArg);
//     process.stdout.write(data.toString());
//   } catch (err) {
//     console.log('Error', err);
//   }
// } else {
//   console.log('Please pass in a file to read');
//   process.exit();
// }

// process.stdout.write('this is a synchronous version')


//-------- ASYNCHRONOUS VERSION --------//
// const {
//   createReadStream, createWriteStream,
//   appendFile, writeFile
// } = require('fs');

// const fileArg = process.argv[2];
// const { Transform, Writable} = require('stream');
// const upperCase = Transform();
// const writeStream = Writable();

// upperCase._transform = (buffer, _, callback) => {
//   callback(null, buffer.toString().toUpperCase());
// }

// writeStream._write = (buffer, _, next) => {
//   writeFile('messageUppercase.txt', buffer, (err) => {
//     if(err) throw err;
//     console.log('The data to write was added to the file!');
//   });
//   next();
// };

// createReadStream(fileArg)
// .pipe(upperCase)
// .pipe(writeStream);




//-------- Machine Dictionary word search --------//
const userInput = process.argv[2] ? process.argv[2].toLowerCase() : null;
const { createReadStream } = require('fs');
const { Writable } = require('stream');
const { map, split } = require('event-stream');
// import transform stream
const limitToTen = require('./transforms/limit_to_ten');
let wordCount = 0;

const writeStream = Writable();
const wordListStream = createReadStream('/usr/share/dict/words');

writeStream._write = (word, _, next) => {
  if (word.toString() === "limit reached") {
    console.log('limit reached');
    process.exit();
  }
  process.stdout.write(word);
  next();
}

if (!userInput) {
  console.log('Usage: readfile [search term]');
  process.exit();
}

wordListStream
  .pipe(split())
  .pipe(map((word, next) => {
    word.toString().toLowerCase().includes(userInput) ? next(null, word + "\n", wordCount++)
      : next();
  }))
  .pipe(limitToTen())
  .pipe(writeStream);

//
wordListStream.on('end', () => {
  if (wordCount < 1) {
    console.log("No matches found, dude");
  } else {
    console.log("No more matches, dude");
  }
})