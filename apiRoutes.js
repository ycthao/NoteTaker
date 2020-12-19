// LOAD DATA

const fs = require("fs");
let notes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

// ROUTING

module.exports = function(app) {

  app.get("/api/notes", function(req, res) {
    res.json(notes);
  });

  app.get("/api/notes/:id", function(req, res) {
    res.json(data[Number(req.params.id)]);
  });

  // API POST Requests---------------------------------------------------------------------------

  app.post("/api/notes", function(req, res) {
 
    
  });



  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
