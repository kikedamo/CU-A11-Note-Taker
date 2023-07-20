//npm Install
const express = require('express');
const app = express();
const PORT = 3001;
const routes = require('../routes/index');
const fs = require('fs');
const HTML = require("../routes/html")
const Api = require("../routes/api")


app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use("/", routes);

app.listen(PORT, () =>
console.log(`You Did It! The app is now listening to http://localhost:${PORT}`)
);

