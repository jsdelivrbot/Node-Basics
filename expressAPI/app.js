'use strict'; 
const express = require('express');
require('dotenv').config();
const routes = require('./routes/');
const app = express();


// middleware stack
app.use("/api/v1/", routes);


//TODO ADD error handler
app.use((req, res, next)=> {
  let error = new Error("No Comprende BUDDY!");
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status( error.status || 500);
  res.json({
    message: "There was a terrible accident",
    error: error.message
  });
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});