// LOAD DATA

const fs = require("fs");

// ROUTING
module.exports = function (app) {
    let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    app.get("/api/notes", function (req, res) {
        res.json(notes);
    });

    app.get("/api/notes/:id", function (req, res) {
        res.json(notes[Number(req.params.id)]);
    });

    // API POST Requests---------------------------------------------------------------------------

    app.post("/api/notes", function (req, res) {

        // let lastId = 0;
        // let id = lastId + 1;

        // notes.push({ id, ...req.body });
        // res.json(notes.slice(-1));

        let newNote = req.body;
        let uniqueId = (notes.length).toString();

        newNote.id = uniqueId;
        notes.push(newNote);
        
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err) {
            if (err) throw (err);
        }); 

        res.json(notes);  

    });



    app.delete("/api/notes/:id", function (req, res) {
        let noteID = req.params.id;

        notes = notes.filter(currentNote => {
            return currentNote.id != noteID;
        });
        
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err) {
            if (err) throw (err);
        }); 
        res.end();
    });
};
