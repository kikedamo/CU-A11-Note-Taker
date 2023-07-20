//npm Install
const express = require('express');
const app = express();
const db = require('../db/db.json') ;
const PORT = 3001;
const uuid = require('../uuid');
const routes = require('../routes/routes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);
app.use(uuid);

// app.use(routes)
//Routes
// app.get('/', (req, res)=>
// res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
// );

// app.get('/notes', (req,res) =>
// res.sendFile(path.join(__dirname, '/Develop/public/notes.html'))
// );

// app.get('/api', (req, res) => 
// res.json(db)
// );

app.get('/api/notes', (req, res)=> {
    res.send(db)
});

app.post('/api/notes', (req, res)=>{
    console.log(req.body);
    res.send(201);
    // console.info(`Congratulations!!${req.method} has been Completed.`)
    // const {noteTitle, noteText} = req.body;

    // if (noteTitle && noteText) {
    //     const newNotes = {
    //         noteTitle,
    //         noteText,
    //         review_id: uuid(),
    //     }
        
    //     const response = {
    //         status: 'sucess',
    //         body: newNotes,
    //     }

    //     console.log(response)
    //     res.status(201).json(response);
    // }else{
    //     res.status(500).json(`You Messed Up!! There's an error in the Posting Notes !!!!`);
    // }
});


app.listen(PORT, () =>
console.log(`You Did It! The app is now listening to http://localhost:${PORT}`)
);

