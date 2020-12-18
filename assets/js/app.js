// DEPENDENCIES
// npm packages to install
const express = require("express");
const path = require("path");
const notes = require("../../api/notes");

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
    let newNotes = req.body;
    console.log(newNotes);
    notes.push(newNotes);
    res.json(newNotes);

});







app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, indexURL));
});

// Start server and logging message on which port it is listening
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});