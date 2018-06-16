
// const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//* ************************* CHANGE DB LINK BELOW ****************************/
mongoose.connect("mongodb://mimitch:Bladerunner80@ds133550.mlab.com:33550/cocktails");


//* ************************* CHANGE ROUTES BELOW ****************************/
const UsersRoutes = require("./routes/UsersRoutes");
app.use(UsersRoutes);


const port = 3001;

app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  } 
  console.log("Web server is now running on port " + port);
});

// <-----------handle bad request------------->
app.use(function (request,response) {
  response.send("NOPE!!!!");
});

