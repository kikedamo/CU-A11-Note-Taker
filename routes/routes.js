//Routes
const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res)=>{
res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.get('/notes', (req,res) =>{
res.sendFile(path.join(__dirname, '../public/notes.html'))
});

app.get('/api', (req, res) => 
res.json(db)
);

app.get('/api/notes', (req, res)=>{
    res.status(200).json();
});

module.exports = app;