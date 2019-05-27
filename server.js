require('module-alias/register');

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const env = require('@env');
const fs = require('fs');
const app = express();


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
