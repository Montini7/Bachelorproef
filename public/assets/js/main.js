
// Variabele maken voor de antwoord-buttons
const buttonNext = document.getElementById("buttonNext");
const buttonPrev = document.getElementById("buttonPrev");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");

let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');
// Counter begint bij 1, aangezien de eerste vraag direct wordt ingeladen.
let counter = 1;

// Zodat de punten telling begint bij de punten van de eerste vraag
let offsetCounter = 0;

// Eerste vraag standaard inladen
let question = document.getElementById("question");

question.innerHTML = window.cards[0].description;
answer1.innerHTML = window.cards[0].choices.a.label;
answer2.innerHTML = window.cards[0].choices.b.label;
answer3.innerHTML = window.cards[0].choices.c.label;
            
    function checkAnswer(answer, correctAnswer) {
        if(answer == correctAnswer){
            // Markeer de vraag als juist beantwoordt
            console.log('juist');
        }else{
            // Markeer de vraag als fout beantwoordt
            console.log('fout');
        }
    }



        function nextQuestion(){
            // Antwoord controleren op juist of fout -> wegschrijven naar database
            //checkAnswer(this.innerHTML, window.cards[offsetCounter].correctAnswer.label);
            //offsetCounter++;
            // De ...e vraag en antwoorden worden ingeladen (... = counter)
            document.getElementById("character").innerHTML = window.cards[counter].character;
            document.getElementById("personage").innerHTML = window.cards[counter].image;
            question.innerHTML = window.cards[counter].description;
            answer1.textContent = window.cards[counter].choices.a.label;
            answer2.textContent = window.cards[counter].choices.b.label;
            answer3.textContent = window.cards[counter].choices.c.label;
            radio1.checked = false;
            radio2.checked = false;
            radio3.checked = false;
            counter+= 1;
            if (counter == 1){
                buttonPrev.classList.add('notvis');

            } else{
                buttonPrev.classList.remove('notvis');
            }
        }
        function prevQuestion(){
            if(counter > 0){
                counter -= 1;
            }
            
            document.getElementById("character").innerHTML = window.cards[counter].character;
            document.getElementById("personage").innerHTML = window.cards[counter].image;
            question.innerHTML = window.cards[counter].description;
            answer1.textContent = window.cards[counter].choices.a.label;
            answer2.textContent = window.cards[counter].choices.b.label;
            answer3.textContent = window.cards[counter].choices.c.label;
            if (counter == 1){
                buttonPrev.classList.add('notvis');

            } else{
                buttonPrev.classList.remove('notvis');
            }
        }
            

// -----------------------------------------------------------------------------------------------------------------KNOP1
            // Wanneer je op 'VOLGENDE' klikt schrijf je het antwoord weg -> verandert image, personage, vraag en antwoorden.
            buttonNext.addEventListener("click", function(){
                nextQuestion();
            });

            buttonPrev.addEventListener("click", function(){
                prevQuestion();
            });



// -----------------------------------------------------------------------------------------------------------------KNOP2      
            // Hier begint de functie die wordt uitgevoerd alsje op antwoord-knop B drukt.
            // buttonPrev.addEventListener("click", function(){
            //     // Antwoord controleren op juist of fout -> wegschrijven naar database
            //      checkAnswer(this.innerHTML, window.cards[offsetCounter].correctAnswer.label);
            //     offsetCounter++;
            //             document.getElementById("character").innerHTML = window.cards[counter].character;
            //             document.getElementById("personage").innerHTML = window.cards[counter].image;
            //             document.getElementById("question").innerHTML = window.cards[counter].description;
            //             document.getElementById("button1").innerHTML = window.cards[counter].choices.a.label;
            //             document.getElementById("button2").innerHTML = window.cards[counter].choices.b.label;
            //             document.getElementById("button3").innerHTML = window.cards[counter].choices.c.label;
            //             counter++;
            // });


            
