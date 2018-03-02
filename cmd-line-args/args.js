#!/usr/bin/env node
'use strict'; 

let nums = [];
let sum = 0;

for(let i=2;i<process.argv.length;i++){
  nums.push(process.argv[i]);
  nums = nums.map((num)=>{
    return Number(num);
  })
}

if(process.argv.length>2){
  sum = nums.reduce(function (a,b) {
    return a+b;
  })
}

console.log(sum);