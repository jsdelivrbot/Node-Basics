'use strict'; 
let sequelize = require('sequelize');
let queryInterface = require('sequelize/lib/query-interface');

const { beaches } = require('./seeders/data/beaches.json');
const { lifeguards } = require('./seeders/data/lifeguards.json');
const { castles } = require('./seeders/data/castles.json');
const { tools } = require('./seeders/data/tools.json');

let createdb = (queryInterface) => {
  const app = require('./app'); 
  const models = app.get('models');
  return models.sequelize.sync({ force: true })
    .then((queryInterface) => {
      return models.Beach.bulkCreate(beaches);
    })
    .then((queryInterface) => {
      return models.Lifeguard.bulkCreate(lifeguards);
    })
    .then((queryInterface) => {
      return models.Tool.bulkCreate(tools);
    })
    .then((queryInterface) => {
      return models.Sandcastle.bulkCreate(castles);
    })
    .then(() => {
      process.exit();
    })
    .catch((err) => {
      console.log("ARRRRGH!", err);
    })
}

createdb(queryInterface);