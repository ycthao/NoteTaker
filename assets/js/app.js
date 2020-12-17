// DEPENDENCIES
// npm packages to install
const express = require("express");
const path = require("path");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

const index = "../../index.html";
const notes = "../../notes.html";

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, notes));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, index));
});

app.post("/api/notes", function(req, res) {
    notes.push(req.body);
});









// Start server and logging message on which port it is listening
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});