// DEPENDENCIES
// npm packages to install
const express = require("express");
const path = require("path");
const fs = require("fs");
const util = require("util");
//const notes = require("../../api/notes");

// Tells node that we are creating an "express" server
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

const indexURL = "../../index.html";
const notesURL = "../../notes.html";

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, notesURL));
});



app.post("/api/notes", function(req, res) {
    let notes = [];
    let newNote = req.body;

    notes = JSON.parse(fs.readFileSync(path.join(__dirname, "/api/notes.json")));

    notes.push(newNote);

    fs.writeFile(path.join(__dirname, "/api/notes.json"), notes, (err) => {
        if (err)
        {
            console.log(err);
        } else {
            console.log("Saved");
        }

        res.send();
    })


});







app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, indexURL));
});

// Start server and logging message on which port it is listening
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});