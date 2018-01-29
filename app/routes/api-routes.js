// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var GlossaryTerm = require("../models/glossaryTerm.js");
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:GlossaryTerm", function(req, res) {
    console.log("You hit the glossary route!")
    // If the user provides a specific character in the URL...
    if (req.params.GlossaryTerm) {
      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      db.GlossaryTerm.findOne({
        where: {
          routeName: req.params.GlossaryTerm
        }
      }).then(function(result) {
        console.log(result.dataValues)
         res.json(result.dataValues);
      });
    }
  });
}
