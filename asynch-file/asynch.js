#!/usr/bin/env node
'use strict';
const { readFile } = require('fs');
const [, , fileArg] = process.argv;

if (fileArg) {
  try {
    const data = readFile(fileArg,{encoding: 'UTF-8' },(err,data)=>{
      if(err) throw err;
      process.stdout.write(data);
    });

  } catch (err) {
    console.log('Error', err);
  }
} else {
  process.exit();
}
