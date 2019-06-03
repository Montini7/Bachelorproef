
// Variabele maken voor de antwoord-buttons
const buttonNext = document.getElementById("buttonNext");
const buttonPrev = document.getElementById("buttonPrev");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");

let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');
let inputRadioBtn = document.getElementsByClassName('radioBtn');

const questionsCount = 5;
let answerScore= 0;

var answers = [];



// Locale storage functie
const get = (f) => {
    return localStorage.getItem(f);
    return false;
  };


const set = (f, v) => {
	localStorage.setItem(f, v);
    return true;
};



// Deze counter wordt gebruikt om de zoveelste vraag in te laden.
let counter = 0;
// Deze counter wordt gebruikt om te controleren of je het juiste antwoord hebt aangeduid.
let offsetCounter = 0;

// Eerste vraag standaard inladen
let question = document.getElementById("question");
            
    function checkAnswer(answer, correctAnswer, answers) {
        
        if(answer == correctAnswer){
            // Markeer de vraag als juist beantwoordt
            console.log('juist');
        }else{
            // Markeer de vraag als fout beantwoordt
            console.log('fout');
        }

        answers.push(answer);
        set('answers', JSON.stringify(answers));

    }
// deze functie definieert het veranderen van een vraag.
    function setQuestion(counterId){

        document.getElementById("character").innerHTML = window.cards[counterId].character;
        document.getElementById("personage").innerHTML = window.cards[counterId].image;
        question.innerHTML = window.cards[counterId].description;
        answer1.textContent = window.cards[counterId].choices.a.label;
        answer2.textContent = window.cards[counterId].choices.b.label;
        answer3.textContent = window.cards[counterId].choices.c.label;
        /*radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;*/
        
        if (counter == 0){
            buttonPrev.classList.add('notvis');

        } else{
            buttonPrev.classList.remove('notvis');
        }
        
    }

// Deze functie dient om de volgende vraag in te laden.
        function nextQuestion(){
            if(counter < questionsCount){
                 counter+= 1;
            }
            // Antwoord controleren op juist of fout -> wegschrijven naar database
            //checkAnswer(this.innerHTML, window.cards[offsetCounter].correctAnswer.label,answers);
            //offsetCounter++;
           setQuestion(counter);
        }
// Deze functie dient om terug naar de vorige vraag te gaan
        function prevQuestion(){
            if(counter > 0){
                counter -= 1;
            }
           setQuestion(counter);
           
        }
            

// -----------------------------------------------------------------------------------------------------------------KNOP1
            // Wanneer je op 'VOLGENDE' klikt schrijf je het antwoord weg -> verandert image, personage, vraag en antwoorden.
            buttonNext.addEventListener("click", function(){
                if (radio1.checked){
                    storeAnswer(counter, radio1.value);
                    nextQuestion();
                }
                if(radio2.checked) {
                    storeAnswer(counter, radio2.value);
                    nextQuestion();
                }
                if(radio3.checked) {
                    storeAnswer(counter, radio3.value);
                    nextQuestion();
                }
                switch (answers[counter]) {
                    case "a":
                        radio1.setAttribute("checked", "checked");
                        break;

                    case "b":
                        radio2.setAttribute("checked", "checked");
                        break;

                    case "c":
                        radio3.setAttribute("checked", "checked");
                        break;   

                    default:
                            radio1.setAttribute("checked", "false");
                            radio2.setAttribute("checked", "false");
                            radio3.setAttribute("checked", "false");
                        break;
                }
            });

         

            
            // Wanneer je op 'VORIGE' klikt -> verandert image, personage, vraag en antwoorden naar de vorige vraag.
            buttonPrev.addEventListener("click", function(){
                    prevQuestion();
                    switch (answers[counter]) {
                        case "a":
                            radio1.setAttribute("checked", "checked");
                            break;

                        case "b":
                            radio2.setAttribute("checked", "checked");
                            break;

                        case "c":
                            radio3.setAttribute("checked", "checked");
                            break;   

                        default:
                                radio1.setAttribute("checked", "false");
                                radio2.setAttribute("checked", "false");
                                radio3.setAttribute("checked", "false");
                            break;
                    }
            });

            setQuestion(0);
            // Functie om het gegeven antwoord op te slagen om later te tonen welke antwoorden de gebruiker 'juist'/'fout' had.
            function storeAnswer(id, answerLabel) {
                // store answerLabel in certain place within answers array
                answers[id] = answerLabel;
                
                if(answers[id] == window.cards[counter].correctAnswer.label){
                    answerScore++;
                }
                console.log("je score is: " + answerScore +"/7");
            }

            
            
            
