#!/usr/bin/env node
'use strict'; 
const chalk = require('chalk');
const log = console.log;

const uniStar = '\u2b52'
const star = `${chalk.white(uniStar)}`
const fullLine = '                                               ';
const blueLine1 = ` ${star} ${star} ${star} ${star} ${star} ${star} ${star} `;
const blueLine2 = `  ${star} ${star} ${star} ${star} ${star} ${star}  `;
const partialLine =  '                                '

//star section
for (let i = 0; i < 3; i++) {
  log(`${chalk.bgBlue(blueLine1)}${chalk.bgRed(partialLine)}`);
  log(`${chalk.bgBlue(blueLine2)}${chalk.bgWhite(partialLine)}`);
}
//remaining red line
log(`${chalk.bgBlue(blueLine1)}${chalk.bgRed(partialLine)}`);
//remaining white/red stripes
for(let i=0;i<3;i++){
  log(chalk.bgWhite(fullLine));
  log(chalk.bgRed(fullLine));
}
