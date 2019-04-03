require('module-alias/register');

const express = require('express');
const path = require('path');
const ejs = require('ejs');
const env = require('@env');


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


app.listen(Number(env.port), () => {
  console.log(`Website started on port ${env.port}`);
});
