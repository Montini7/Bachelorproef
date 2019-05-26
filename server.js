require('module-alias/register');

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const env = require('@env');
const fs = require('fs');
const app = express();


// const csv = require('fast-csv');
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

var mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongo.connect(url, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  //...

  const db = client.db('kennel')
  const collection = db.collection('dogs')

  collection.insertMany([{name: 'Togo'}, {name: 'Syd'}], (err, result) => {

  })

  collection.find().toArray((err, items) => {
    console.log(items)
  })
  client.close()
});

// ----------------------------------------------------------------------------------- ENDING MONGODB
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

app.get('/info', (req, res) => {
  res.render('info');
});

app.get('/advice', (req, res) => {
  res.render('advice');
});


app.listen(Number(env.port), () => {
  console.log(`Website started on port ${env.port}`);
});
