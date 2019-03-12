// Voer deze file uit met: node timothy.js

// Ik zou dat dus sowieso in 1 file doen omdat je alle clutter van Views, EJS, ExpressJS etc. niet nodig hebt.
// Zet node_modules ook op .gitignore, anders wordt je repo veel te groot...
// Ik heb ook devDependencies (Linter) gefixed effe (=> instant coding feedback => remember ik ben niet zo'n goede coder...)
const request = require('request');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Opsplitsen in verschillende variabels om je code leesbaar te maken.
const url = 'https://toggl.com/startup-simulator/cards.import.js';

// {json: true} moet je niet meesturen :)
request(url, (err, headers, body) => {
  if(err) console.log(err);

  // Toggl stuurt gewoon een Javascript file terug (zie extentie van url)
  // We moeten deze dus omvormen van Javascript naar JSON format.
  const json = JSON.parse(body.replace('window.cards = ', ''));

  // Nu lopen over de data en de id & description (vraag) printen.
  for (var i = 0; i < json.length; i++) {
    console.log(json[i].id, json[i].description)
  }

});