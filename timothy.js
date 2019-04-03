// Voer deze file uit met: node timothy.js

// Ik zou dat dus sowieso in 1 file doen omdat je alle clutter van Views, EJS, ExpressJS etc. niet nodig hebt.
// Zet node_modules ook op .gitignore, anders wordt je repo veel te groot...
// Ik heb ook devDependencies (Linter) gefixed effe (=> instant coding feedback => remember ik ben niet zo'n goede coder...)
const request = require('request');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs'); // dees require

// Opsplitsen in verschillende variabels om je code leesbaar te maken.
const url = 'https://toggl.com/startup-simulator/cards.import.js';

// {json: true} moet je niet meesturen :)
request(url, (err, headers, body) => {
  if(err) console.log(err);

  // Toggl stuurt gewoon een Javascript file terug (zie extentie van url)
  // We moeten deze dus omvormen van Javascript naar JSON format.
  const json = JSON.parse(body.replace('window.cards = ', ''));

  // Nu lopen over de data en de id & description (vraag) printen.
  let text =  "ID\tDESCRIPTION\tVALUATION A\tHAPPINESS A\tTIME A\tVALUATION B\tHAPPINESS B\tTIME B\n"
  for (var i = 0; i < json.length; i++) {
      //console.log(json[i].id, json[i].description, json[i].choices)

      

      // en dan voor elke lijn dit doen:
      const line = json[i].id + "\t" + json[i].description + "\t" + json[i].choices.a.values.valuation + "\t" + json[i].choices.a.values.happiness + "\t" + json[i].choices.a.values.time + "\t" + json[i].choices.b.values.valuation + "\t" + json[i].choices.b.values.happiness + "\t" + json[i].choices.b.values.time + "\n"; // die eerste \t staat voor tab, de \n staat voor newline.
     console.log(line);
     text += line
    }

    fs.writeFileSync("data.csv", text)


});
