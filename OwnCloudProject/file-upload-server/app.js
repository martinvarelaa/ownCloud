const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser");
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,  './uploads' );
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });
const upload = multer({ storage: storage });
const path = require('path');
const fs = require('fs');
const  directory = path.join('./uploads');
var jsonFileNames;

fs.readdir(directory, function (err, files) {

  if (err) {
        return console.log('Imposible de escanear la carpeta!')
  } else{
    console.log('El directorio: ' + directory + ' tiene  los siguientes archivos; ' )


    files.forEach(function (file) {
      console.log(file);
      
    });

     jsonFileNames = JSON.stringify(files);
    

  }
  
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.get('/api/upload', function(req,res) {
    return res.send("Esperando archivos para ser recibidos y procesados")
});


app.post( '/api/upload',  upload.any(), (req, res, next) => {
    
    res.json(
        
        {
        'message': 'File uploaded succesfully.'
        }
    );
});

app.post( '/api/list',  (req, res, next) => {
    
  res.send(jsonFileNames);
});




app.listen(port, () => console.log(`Puerto:  ${port}!`))