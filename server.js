require('module-alias/register');

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const env = require('@env');
const fs = require('fs');
const csv = require('fast-csv');


// fast-csv lezen uit CSV bestand 
      

        // var stream = fs.createReadStream("my.csv");
        
        // var csvStream = csv(dataObject=true)
        // .parse()
        // .on("data", function(data){
        //      console.log(data);
        // })
        // .on("end", function(){
        //      console.log("done");
        // });
     
        // stream.pipe(csvStream);




const app = express();


// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/mydb";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/calculator', (req, res) => {
  res.render('calculator');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});


app.listen(Number(env.port), () => {
  console.log(`Website started on port ${env.port}`);
});
