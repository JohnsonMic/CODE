var db = require("../models");
var routeName= routeName;
var term= glossaryname
var lang=language
var definition[=  glossarydefinition
    
    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   // var routeName = character.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize


      // POST route for saving a new post
  app.post("/api/GlossaryTerm", function(req, res) {
    console.log("body " + req);
    console.log (req);
    db.GlossaryTerm.create({
      routeName: routeName,
      term: glossary.name,
      lang: glossary.language,
      definition: glossary.definition
    })
    .then(function(dbGlossaryTerm) {
      res.json(dbGlossaryTerm);
    });
  });

  // DELETE route for deleting posts
  app.delete("/api/GlossaryTerm/:id", function(req, res) {
    db.Post.destroy({
      where: {
        id: req.params.GlossaryTerm
      }
    })
    .then(function(dbGlossaryTerm) {
      res.json(dbGlossaryTerm);
    });
  });

  // PUT route for updating posts
 app.put("/api/GlossaryTerm", function(req, res) {
   db.Post.update(req.body,
      {
        where: {
          id: req.params.GlossaryTerm
        }
      })
    .then(function(dbGlossaryTerm) {
      res.json(dbGlossaryTerm);
    });
  });
  

