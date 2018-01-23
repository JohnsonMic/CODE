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
        console.log(result)
         res.json(result);
      });
    }
  });
}
//     else {
//       // Otherwise...
//       // Otherwise display the data for all of the characters.
//       // (Note how we're using Sequelize here to run our searches)
//       GlossaryTerm.findAll({}).then(function(result) {
//         return res.json(result);

//         var googleQueryUrl = "http://www.apilayer.net/api/live?access_key=3a9198bf3feebaee79f8a0513601a325";

//         var youtubeQueryUrl = "key=AIzaSyBLgm6-G9dBZaC0o_fatgEiCh125MiIxvk" 

//         var glossaryTerm = $("selectedTerm")
        
//       });function googleAjaxCall(selectedTerm) {
//             var glossaryTerm = $(this).attr("data-name");
//             var searchGlossary = glossaryInput.val()
//             console.log("Hi my name is");
//             var googleQueryURL = "https://restcountries.eu/rest/v2/name/" + selectedTerm + "?fullText=true"

//             $.ajax({
//                 url: googleQueryURL,
//                 method: "GET"
//             }).done(function(response) {
               
//                 console.log(response)
//                 console.log(response[0].languages[0].name)
//                 var termArticles = response[0].currencies[0].code;
//                 console.log(response[0].currencies[0].code)
                
//                 $("#search-results").append("<p>" + termArticles + "</p>")
//                 youtubeAjaxCall(selectedTerm);
   
//             }); 
//     }


//             function youtubeAjaxCall(selectedTerm) {
//               var glossaryTerm = $(this).attr("data-name");
//               var searchGlossary = searchInput.val()
//               var youTubeQueryURL = "http://www.apilayer.net/api/live?access_key=3a9198bf3feebaee79f8a0513601a325&currencies="+ selectedTerm;
    
//                 console.log("Hey you")
                
//                 $.ajax({
//                   url: youtubeQueryURL,
//                   method: "GET"
//               }).done(function(response) {
//               console.log(response.videos["0" + selectedTerm])
//               $("#search-results").append("<p>" + response.quotes["USD"+ currencyCode] + "</p>")
//               });       
          
//               }

//         googleAjaxCall();
   
// });

// });



  
