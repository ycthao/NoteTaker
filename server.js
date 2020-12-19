// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality

const express = require('express');
const fs = require('fs');
const path = require('path');


// Setting up port and app
const app = express();
const PORT = 3000;

// Set up express app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let note = [];
let id = 0;

// Defining link
const noteURL = "/public/notes.html";
const indexURL = "/public/index.html";

// Defining route
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, noteURL));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, indexURL));
});



// Start server to begin linstening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

