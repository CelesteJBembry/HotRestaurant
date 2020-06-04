// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var customers = [];

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });


  app.post("/api/tables", function(req, res) {
      console.log(req)
  }
  )
//---------------------------------------
// app.get("/api/characters/:character", function(req, res) {
//     var chosen = req.params.character;
// console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  //want to limit the reservation list to 5, we want to create a limit before it pushes the reservation