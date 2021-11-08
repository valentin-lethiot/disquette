const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const DisquetteService = require('./disquettes/disquettes.js')

const host = 'localhost';
const port = 8081;

app.use(bodyParser.json());
app.use(cors());

app.get('/disquettes', (req,res) => {
    const disquettes = DisquetteService.getAll()
    res.status(200).json(disquettes)
    res.end()
})

app.post('/disquettes', (req, res, next) => {
    const newDisquette = req.body.disquette

    DisquetteService.add(newDisquette)
    res.status(201)
    res.end()
})

const server = app.listen(port, host, function () {
    console.log("App listening at http://%s:%s", host, port)
})
