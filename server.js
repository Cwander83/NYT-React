const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const logger = require("morgan");
const PORT = process.env.PORT || 3001;

// Require all models
const db = require("./models");

// Configure body parser for AJAX requests
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Serve up static assets
app.use(express.static("client/build"));


// Add routes, both API and view
const routes = require("./routes");
app.use(routes);


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
//add mongo heroku uri
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nyt-react"
);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening${PORT}`);
});