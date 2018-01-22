
// If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var glossaryterm = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from character.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
   // var routeName = character.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    glossaryterm.create({
      routeName: routeName,
      term: character.name,
      language: character.role,
      definition: character.age,
     
    });
  });
};