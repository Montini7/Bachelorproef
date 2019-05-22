
// Variabele maken voor de antwoord-buttons
            const button1 = document.getElementById("button1");
            const button2 = document.getElementById("button2");

            // Counter begint bij 1, aangezien de eerste vraag direct wordt ingeladen.
            let counter = 1;

            // Zodat de punten telling begint bij de punten van de eerste vraag
            let offsetCounter = 0;

            // Variabele maken voor de scores
        //     let valuation = document.getElementById("valu");
        //     let happiness = document.getElementById("happ");

            // Tijdelijke scoren begint op 0, hierna wordt de score behaald door het antwoorden van de vraag, toegevoegd.
        //     let temporaryScoreVal = 0;
        //     let temporaryScoreHap = 0;

            // Eerste vraag standaard inladen
            let firstQuestion = document.getElementById("question");
            let firstAnswerA = document.getElementById("button1");
            let firstAnswerB = document.getElementById("button2");
            let firstAnswerC = document.getElementById("C");
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

            // Hier begint de functie die wordt uitgevoerd alsje op antwoord-knop A drukt.
            button1.addEventListener("click", function(){
                checkAnswer(this.innerHTML, window.cards[counter].correctAnswer.label);
                console.log(this.innerHTML);
                offsetCounter++;

             
             // Checken of je score boven de 0 is.
           //      if(temporaryScoreHap>=0 && temporaryScoreVal >=0){

            // De ...e vraag en antwoorden worden ingeladen (... = counter)
            document.getElementById("question").innerHTML = window.cards[counter].description;
            document.getElementById("button1").innerHTML = window.cards[counter].choices.a.label;
            document.getElementById("button2").innerHTML = window.cards[counter].choices.b.label;

            // De tijdelijke score + de score behaald door het antwoorden van optie A
        //     temporaryScoreVal += window.cards[offsetCounter].choices.a.values.valuation;
        //     temporaryScoreHap += window.cards[offsetCounter].choices.a.values.happiness;
        //     console.log(temporaryScoreVal,temporaryScoreHap);
        //     valuation.innerHTML = temporaryScoreVal;
        //     happiness.innerHTML = temporaryScoreHap;
        //     counter++;
        //     offsetCounter++;
        //     } else {
        //                 document.body.className+="userIsDead";
        //     }
            });
        
            // Hier begint de functie die wordt uitgevoerd alsje op antwoord-knop B drukt.
            button2.addEventListener("click", function(){
                checkAnswer(this.innerHTML, window.cards[offsetCounter].correctAnswer.label);
                offsetCounter++;
                console.log(this.innerHTML);
           // Checken of je score boven de 0 is.
                // if(temporaryScoreHap>=0 && temporaryScoreVal >=0){
               
            

                        document.getElementById("question").innerHTML = window.cards[counter].description;
                        document.getElementById("button1").innerHTML = window.cards[counter].choices.a.label;
                        document.getElementById("button2").innerHTML = window.cards[counter].choices.b.label;
                        document.getElementById("C").innerHTML = window.cards[counter].choices.c.label;


                        // De tijdelijke score + de score behaald door het antwoorden van optie B   
                        // temporaryScoreVal += window.cards[offsetCounter].choices.b.values.valuation;
                        // temporaryScoreHap += window.cards[offsetCounter].choices.b.values.happiness; 
                        // console.log(temporaryScoreVal,temporaryScoreHap);   
                        // valuation.innerHTML =  temporaryScoreVal;
                        // happiness.innerHTML = valuation.innerHTML;
                        // counter++;
                        // offsetCounter++;
                // } else {
                //         document.body.className+="userIsDead";
                // }
                });

                button3.addEventListener("click", function(){

                    checkAnswer(this.innerHTML, window.cards[offsetCounter].correctAnswer.label);
                    offsetCounter++;
                        // Checken of je score boven de 0 is.
                             // if(temporaryScoreHap>=0 && temporaryScoreVal >=0){
             
                                     document.getElementById("question").innerHTML = window.cards[counter].description;
                                     document.getElementById("A").innerHTML = window.cards[counter].choices.a.label;
                                     document.getElementById("B").innerHTML = window.cards[counter].choices.b.label;
                                     document.getElementById("C").innerHTML = window.cards[counter].choices.c.label;
             
             
                                     // De tijdelijke score + de score behaald door het antwoorden van optie B   
                                     // temporaryScoreVal += window.cards[offsetCounter].choices.b.values.valuation;
                                     // temporaryScoreHap += window.cards[offsetCounter].choices.b.values.happiness; 
                                     // console.log(temporaryScoreVal,temporaryScoreHap);   
                                     // valuation.innerHTML =  temporaryScoreVal;
                                     // happiness.innerHTML = valuation.innerHTML;
                                     // counter++;
                                     // offsetCounter++;
                             // } else {
                             //         document.body.className+="userIsDead";
                             // }
                             });


            
