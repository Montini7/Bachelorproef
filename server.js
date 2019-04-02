
const env = require('./env');
const env = require('./env');
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
const request = require('request');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.get('/', function(req, res){
    res.render('index.ejs');
  });

request('https://toggl.com/startup-simulator/cards.import.js', { json: true }, (err, req, res) => {
  if (err) { return console.log(err); }
    //  console.log(res);


        const data1 = res.replace('window.cards = [', '');
const json = JSON.parse(data1);
console.log(json.id)

  const csvWriter = createCsvWriter({  
    path: 'out.csv',
    header: [
      {id: 'id', title: res.id},
      {id: 'surname', title: 'Surname'},
      {id: 'age', title: 'Age'},
      {id: 'gender', title: 'Gender'},
    ]
  });

  const data = [
    {
      name: 'John',
      surname: 'Snow',
      age: 26,
      gender: 'M'
    }, {
      name: 'Clair',
      surname: 'White',
      age: 33,
      gender: 'F',
    }, {
      name: 'Fancy',
      surname: 'Brown',
      age: 78,
      gender: 'F'
    }
  ];


csvWriter
.writeRecords(data)
.then(()=> console.log('The CSV file was written successfully'));
});




app.listen(env.port, () => {
  console.log(`Toggl started on port ${env.port}`);
});
