// Variabele maken voor de antwoord-buttons
const buttonNext = document.getElementById("buttonNext");
const buttonPrev = document.getElementById("buttonPrev");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");

let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let inputRadioBtn = document.getElementsByClassName("radioBtn");

let valuatie = 50;
let happiness = 50;
let getValScore = document.getElementById('valId');
let getHapScore = document.getElementById('hapId');

let val=0;
let hap=0;

let valWidth = 0;
let hapWidth = 0;


// Aantal vragen
const questionsCount = 12;

// Lege array om de antwoorden in op te slagen.
let answers = [];


// Eerste vraag standaard inladen
let question = document.getElementById("question");

// Deze variabele wordt gebruikt als teller om onder andere de vragen in te laden.
let counter = 0;

// Locale storage functies declareren.
const get = (f) => {
    return localStorage.getItem(f);
    return false;
};

const set = (f, v) => {
    localStorage.setItem(f, v);
    return true;
};
// Begin van de functies;

// 2 functies om ervoor te zorgen dat de radio buttons ook actief worden na het drukken op het antwoord. Niet enkel op de radio button zelf.
answer1.addEventListener("click", function() {
    document.getElementById("radio1").checked = true;
});
answer2.addEventListener("click", function() {
    document.getElementById("radio2").checked = true;
});


// Deze functie dient om de score te berekenen en het advies te geven.
function setScore() {
    // Variabele die op 0 staat, hier worden later het aantal correcte antwoorden in opgeslagen.
    let correct = 0;
    for (let i = 0; i < window.cards.length; i++) {
        var card = window.cards[i];
        var correctAnswer = card.correctAnswer;
        var userAnswer = get("q" + i) || false;
        if (correctAnswer == userAnswer) {
            //  console.log('You answered question ' + i + ' correct = ' + correctAnswer)
            correct += 1;
        }// else {
        //      console.log('You answered question ' + i + ' wrong, correct answer was ' + correctAnswer)
        // }
        
    }
    set('correctAnswers',correct);
}
// console.log('Score: ' + correct + '/'+window.cards.length)
function setGameScore(val,hap) {
    valWidth = valuatie + val;
    hapWidth = happiness + hap;
    valuatie= valWidth;
    happiness = hapWidth;

    getValScore.style.width = valWidth + '%';
    getHapScore.style.width = hapWidth + '%';
}

// deze functie definieert het veranderen van een vraag.
function setQuestion(counterId) {

    let previousAnswered = get("q" + counterId) || false;

    if (previousAnswered) {
        document.querySelector('input[value="' + previousAnswered + '"]').checked = true;
    } else {
        // console.log('First time question')
    }

    document.getElementById("character").innerHTML = window.cards[counterId].character;
    document.getElementById("personage-mobile").innerHTML = window.cards[counterId].image;
    document.getElementById("personage").innerHTML = window.cards[counterId].image;
    question.innerHTML = window.cards[counterId].description;
    answer1.textContent = window.cards[counterId].choices.a.label;
    answer2.textContent = window.cards[counterId].choices.b.label;

    // Deze if functies dienen om de knoppen zichtbaar of onzichtbaar te maken wanneer deze niet nodig zijn.
    if (counter == 0) {
        buttonPrev.classList.add('notvis');
    } else {
        buttonPrev.classList.remove('notvis');
    }
    if (counter > 11) {
       
        buttonNext.addEventListener("click", function() {
            buttonPrev.classList.add('notvis');
            buttonNext.classList.add('notvis');
            buttonEnd.classList.remove('notvis');
        });
    } else {
        buttonPrev.classList.remove('notvis');
    }
    setScore();
}



// Deze functie dient om de volgende vraag in te laden.
function nextQuestion() {
    if (counter < questionsCount) {
        counter += 1;
    }
    setQuestion(counter);
}
// Deze functie dient om terug naar de vorige vraag te gaan
function prevQuestion() {
    if (counter > 0) {
        counter -= 1;
    }
    // console.log(counter);
    setQuestion(counter);
}

function storeAnswer(id, answerLabel) {
    // Het antwoord opslaan in local storage
    set('q' + id, answerLabel);
}
// ------------------Volgende en terug knoppen

// Wanneer je op 'VOLGENDE' klikt schrijf je het antwoord weg -> verandert image, personage, vraag en antwoorden naar de volgende vraag.
buttonNext.addEventListener("click", function() {
    let value = ""
    let options = document.querySelectorAll('input[type="radio"]');

    for (let i = 0; i < options.length; i += 1) {
        if (options[i].checked) {
            value = options[i].value;
        }
        options[i].checked = false;
    }

    // console.log("Value: ", value)
    storeAnswer(counter, value);
      let userChoice = get("q" + counter) || false;
      switch(userChoice) {
        case 'a':
             val = window.cards[counter].choices.a.values.valuation;
             hap = window.cards[counter].choices.a.values.happiness;
          break;

        case 'b':
             val = window.cards[counter].choices.b.values.valuation;
             hap = window.cards[counter].choices.b.values.happiness;
          break;

        default:
          break;
      }
        setGameScore(val,hap)
    nextQuestion();
    // console.log(counter);
});
// Wanneer je op 'VORIGE' klikt -> verandert image, personage, vraag en antwoorden naar de vorige vraag.
buttonPrev.addEventListener("click", function() {
    prevQuestion();
});
setQuestion(0);



