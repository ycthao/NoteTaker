// DEPENDENCIES
// npm packages to install
const express = require("express");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });