
// Variabele maken voor de antwoord-buttons
const buttonNext = document.getElementById("buttonNext");
const buttonPrev = document.getElementById("buttonPrev");
let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");

let radio1 = document.getElementById('radio1');
let radio2 = document.getElementById('radio2');
let radio3 = document.getElementById('radio3');

var answers = [];

const get = (f) => {
    return localStorage.getItem(f);
    return false;
  };


const set = (f, v) => {
	localStorage.setItem(f, v);
    return true;
};



// De 'counter'veelste vraag wordt ingeladen.
let counter = 0;
// Om te controleren of je het juiste antwoord hebt gebruikt.
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
        radio1.checked = false;
        radio2.checked = false;
        radio3.checked = false;
        
        if (counter == 0){
            buttonPrev.classList.add('notvis');

        } else{
            buttonPrev.classList.remove('notvis');
        }
        
    }

// Deze functie dient om de volgende vraag in te laden.
        function nextQuestion(){
            counter+= 1;
            // Antwoord controleren op juist of fout -> wegschrijven naar database
            checkAnswer(this.innerHTML, window.cards[offsetCounter].correctAnswer.label,answers);
            offsetCounter++;

           
    
           setQuestion(counter);
        }
        function prevQuestion(){
            console.log(counter);
            if(counter > 0){
                counter -= 1;
            }
           setQuestion(counter);
           
        }
            

// -----------------------------------------------------------------------------------------------------------------KNOP1
            // Wanneer je op 'VOLGENDE' klikt schrijf je het antwoord weg -> verandert image, personage, vraag en antwoorden.
            buttonNext.addEventListener("click", function(){
                if (radio1.checked || radio2.checked || radio3.checked){
                        nextQuestion();
                }
            });


            buttonPrev.addEventListener("click", function(){
                prevQuestion();
            });

            setQuestion(0);

            
