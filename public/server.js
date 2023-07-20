//npm Install
const express = require('express');
const app = express();
const db = require('../db/db.json') ;
const PORT = 3001;
const uuid = require('../uuid');
const routes = require('../routes/routes');
const fs = require('fs');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);
app.use(uuid);

app.get("/",(req, res) =>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes",(req, res) =>{
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("/api/notes",(req, res) =>{
    res.json(db);
});

app.post("/api/notes",(req, res) =>{
    db.push(req.body);
    fs.writeFile("../db/db.json", JSON.stringify(db), (err) =>
        err ? console.log(err) : console.log("Working I think")
    )
});

app.delete("/api/notes/:id", (req, res) =>{
    const ReqNotes = req.params.id.toLowerCase();
    const NoteToDel = db.find(el => el.id === ReqNotes);
    const I = db.indexOf(NoteToDel);
    db.splice(I, 1);
    fs.writeFile("../db/db.json", JSON.stringify(db), (err) =>
        err ? console.log(err) : console.log("Working I think")
    )
})

app.get("*",(req, res) =>{
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () =>
console.log(`You Did It! The app is now listening to http://localhost:${PORT}`)
);

