// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var GloossaryTerm = require("../models/GlossaryTerm.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:GlossaryTerm?", function(req, res) {
    // If the user provides a specific character in the URL...
    if (req.params.GlossaryTerm) {
      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      GlossaryTerm.findOne({
        where: {
          routeName: req.params.term.language.definiton
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      // Otherwise...
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      Character.findAll({}).then(function(result) {
        return res.json(result);

        
      });function destinationAjaxCall() {
            var destination = $(this).attr("data-name");
            var searchTerm = searchInput.val()
            console.log("Hi my name is");
            var destinationURL = "https://restcountries.eu/rest/v2/name/" + searchTerm + "?fullText=true"

            $.ajax({
                url: destinationURL,
                method: "GET"
            }).done(function(response) {
               
                console.log(response)
                console.log(response[0].languages[0].name)
                var currencyCode = response[0].currencies[0].code;
                var currencyName = response[0].currencies[0].name;
                var languageName = response[0].languages[0].name;
                console.log(response[0].currencies[0].code)
                console.log(response[0].currencies[0].name)

                $("#search-results").append("<p>" + currencyCode + "</p>")
                $("#search-results").append("<p>" + currencyName + "</p>")
              $("#search-results").append("<p>" + languageName + "</p>")
              currencyAjaxCall(currencyCode);
   
            }); 
    }


            function currencyAjaxCall(currencyCode) {
              var currency = $(this).attr("data-name");
              var searchCurrency = searchInput.val()
                var currencyQueryURL = "http://www.apilayer.net/api/live?access_key=3a9198bf3feebaee79f8a0513601a325&currencies="+ currencyCode;
    
                console.log("Hey you")
                
                $.ajax({
                  url: currencyQueryURL,
                  method: "GET"
              }).done(function(response) {
            console.log(response.quotes["USD" + currencyCode])
            $("#search-results").append("<p>" + response.quotes["USD"+ currencyCode] + "</p>")
              });       
          
            }

        destinationAjaxCall();
   
});

});


    }
  });

  
