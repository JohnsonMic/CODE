var express = require("express");
var mysql = require("mysql2");
var bodyParser = require("body-parser");
var db = require("./app/models");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3306;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory to be served
app.use(express.static("./app/public"));

// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);
require("./app/routes/survey-routes.js")(app);

// Here we introduce HTML routing to serve different HTML files
// require("./app/routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
db.sequelize.sync()
.then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })
  .catch(function(err) {
  	console.log(err.message);
  })
});

