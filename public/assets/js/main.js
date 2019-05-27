
// Variabele maken voor de antwoord-buttons
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

// Counter begint bij 1, aangezien de eerste vraag direct wordt ingeladen.
let counter = 1;

// Zodat de punten telling begint bij de punten van de eerste vraag
let offsetCounter = 0;

// Eerste vraag standaard inladen
let firstQuestion = document.getElementById("question");
let firstAnswerA = document.getElementById("button1");
let firstAnswerB = document.getElementById("button2");
let firstAnswerC = document.getElementById("button3");

firstQuestion.innerHTML = window.cards[0].description;
firstAnswerA.innerHTML = window.cards[0].choices.a.label;
firstAnswerB.innerHTML = window.cards[0].choices.b.label;
firstAnswerC.innerHTML = window.cards[0].choices.c.label;
            
    function checkAnswer(answer, correctAnswer) {
        if(answer == correctAnswer){
            // Markeer de vraag als juist beantwoordt
            console.log('juist');
        }else{
            // Markeer de vraag als fout beantwoordt
            console.log('fout');
        }
    }



// -----------------------------------------------------------------------------------------------------------------KNOP1
            // Hier begint de functie die wordt uitgevoerd alsje op antwoord-knop A drukt.
            button1.addEventListener("click", function(){
                // Antwoord controleren op juist of fout -> wegschrijven naar database
                 checkAnswer(this.innerHTML, window.cards[offsetCounter].correctAnswer.label);
                offsetCounter++;
            // De ...e vraag en antwoorden worden ingeladen (... = counter)
                        document.getElementById("character").innerHTML = window.cards[counter].character;
                        document.getElementById("question").innerHTML = window.cards[counter].description;
                        document.getElementById("button1").innerHTML = window.cards[counter].choices.a.label;
                        document.getElementById("button2").innerHTML = window.cards[counter].choices.b.label;
                        document.getElementById("button3").innerHTML = window.cards[counter].choices.c.label;
                        counter++;
            });



// -----------------------------------------------------------------------------------------------------------------KNOP2      
            // Hier begint de functie die wordt uitgevoerd alsje op antwoord-knop B drukt.
            button2.addEventListener("click", function(){
                // Antwoord controleren op juist of fout -> wegschrijven naar database
                 checkAnswer(this.innerHTML, window.cards[offsetCounter].correctAnswer.label);
                offsetCounter++;
                        document.getElementById("character").innerHTML = window.cards[counter].character;
                        document.getElementById("question").innerHTML = window.cards[counter].description;
                        document.getElementById("button1").innerHTML = window.cards[counter].choices.a.label;
                        document.getElementById("button2").innerHTML = window.cards[counter].choices.b.label;
                        document.getElementById("button3").innerHTML = window.cards[counter].choices.c.label;
                        counter++;
            });



// -----------------------------------------------------------------------------------------------------------------KNOP3
            // Hier begint de functie die wordt uitgevoerd alsje op antwoord-knop C drukt.
            button3.addEventListener("click", function(){
                // Antwoord controleren op juist of fout -> wegschrijven naar database
                 checkAnswer(this.innerHTML, window.cards[offsetCounter].correctAnswer.label);
                offsetCounter++;
                        document.getElementById("character").innerHTML = window.cards[counter].character;
                        document.getElementById("question").innerHTML = window.cards[counter].description;
                        document.getElementById("button1").innerHTML = window.cards[counter].choices.a.label;
                        document.getElementById("button2").innerHTML = window.cards[counter].choices.b.label;
                        document.getElementById("button3").innerHTML = window.cards[counter].choices.c.label;
                        counter++;
            });


            
