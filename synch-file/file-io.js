#!/usr/bin/env node
'use strict';  
const { readFileSync } = require('fs');
const [,,fileArg] = process.argv;

if (fileArg) {
  try {
    //encoding parameter to return data as string
    const data = readFileSync(fileArg, { encoding: 'UTF-8' });
    process.stdout.write(data);
  } catch (err) {
    console.log('Error', err);
  }
} else {
  process.exit();
}
