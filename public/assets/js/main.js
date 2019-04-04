   // Variabele maken voor de antwoord-buttons
            const button1 = document.getElementById("button1");
            const button2 = document.getElementById("button2");

            // Counter begint bij 1, aangezien de eerste vraag direct wordt ingeladen.
            let counter = 1;

            // Zodat de punten telling begint bij de punten van de eerste vraag
            let offsetCounter = 0;

            // Variabele maken voor de scores
            let valuation = document.getElementById("valu");
            let happiness = document.getElementById("happ");

            // Tijdelijke scoren begint op 0, hierna wordt de score behaald door het antwoorden van de vraag, toegevoegd.
            let temporaryScoreVal = 0;
            let temporaryScoreHap = 0;

            // Eerste vraag standaard inladen
            let firstQuestion = document.getElementById("question");
            let firstAnswerA = document.getElementById("A");
            let firstAnswerB = document.getElementById("B");
            firstQuestion.innerHTML = window.cards[0].description;
            firstAnswerA.innerHTML = window.cards[0].choices.a.label;
            firstAnswerB.innerHTML = window.cards[0].choices.b.label;

            // Hier begint de functie die wordt uitgevoerd alsje op antwoord-knop A drukt.
            button1.addEventListener("click", function(){
             
             // Checken of je score boven de 0 is.
             if(temporaryScoreHap>=0 && temporaryScoreVal >=0){

            // De ...e vraag en antwoorden worden ingeladen (... = counter)
            document.getElementById("question").innerHTML = window.cards[counter].description;
            document.getElementById("A").innerHTML = window.cards[counter].choices.a.label;
            document.getElementById("B").innerHTML = window.cards[counter].choices.b.label;

            // De tijdelijke score + de score behaald door het antwoorden van optie A
            temporaryScoreVal += window.cards[offsetCounter].choices.a.values.valuation;
            temporaryScoreHap += window.cards[offsetCounter].choices.a.values.happiness;
            console.log(temporaryScoreVal,temporaryScoreHap);
            valuation.innerHTML = temporaryScoreVal;
            happiness.innerHTML = temporaryScoreHap;
            counter++;
            offsetCounter++;
            } else {
                        document.body.className+="userIsDead";
            }
            });
        
            // Hier begint de functie die wordt uitgevoerd alsje op antwoord-knop B drukt.
            button2.addEventListener("click", function(){
           // Checken of je score boven de 0 is.
                if(temporaryScoreHap>=0 && temporaryScoreVal >=0){

                        document.getElementById("question").innerHTML = window.cards[counter].description;
                        document.getElementById("A").innerHTML = window.cards[counter].choices.a.label;
                        document.getElementById("B").innerHTML = window.cards[counter].choices.b.label;


                        // De tijdelijke score + de score behaald door het antwoorden van optie B   
                        temporaryScoreVal += window.cards[offsetCounter].choices.b.values.valuation;
                        temporaryScoreHap += window.cards[offsetCounter].choices.b.values.happiness; 
                        console.log(temporaryScoreVal,temporaryScoreHap);   
                        valuation.innerHTML =  temporaryScoreVal;
                        happiness.innerHTML = valuation.innerHTML;
                        counter++;
                        offsetCounter++;
                } else {
                        document.body.className+="userIsDead";
                }
                });

            
