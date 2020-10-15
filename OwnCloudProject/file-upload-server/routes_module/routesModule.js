'use strict'

const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




const path = require('path');
const fs = require('fs');
const directory = path.join('./uploads');


const multer = require('../multer_module/multerModule');


app.get('/api/upload', (req,res)=> {
    return res.send("Esperando archivos para ser recibidos y procesados")
});

app.post( '/api/upload',  multer.any(), (req, res) => {
    res.json({'Mensaje': `El archivo se encuentra en ${directory}`});
});

app.post( '/api/list',  (req, res) => {
    res.send(fs.readdirSync(directory));
});

module.exports = app;
