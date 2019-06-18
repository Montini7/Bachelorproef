// Variabele maken voor de antwoord-buttons
const buttonNext = document.getElementById("buttonNext");
const buttonPrev = document.getElementById("buttonPrev");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");

let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let inputRadioBtn = document.getElementsByClassName("radioBtn");

// Aantal vragen
const questionsCount = 5;

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
// Begin van de functies

// Deze functie dient om de score te berekenen en het advies te geven.
function setScore() {
    // Variabele die op 0 staat, hier worden later het aantal correcte antwoorden in opgeslagen.
    let correct = 0;
    for (let i = 0; i < window.cards.length; i++) {
        var card = window.cards[i];
        var correctAnswer = card.correctAnswer;
        var userAnswer = get("q" + i) || false;
        if (correctAnswer == userAnswer) {
             console.log('You answered question ' + i + ' correct = ' + correctAnswer)
            correct += 1;
        } else {
             console.log('You answered question ' + i + ' wrong, correct answer was ' + correctAnswer)
        }
        
    }
    set('correctAnswers',correct);
}
// console.log('Score: ' + correct + '/'+window.cards.length)


// deze functie definieert het veranderen van een vraag.
function setQuestion(counterId) {

    let previousAnswered = get("q" + counterId) || false;

    if (previousAnswered) {
        console.log("previous answer: ", previousAnswered)
        document.querySelector('input[value="' + previousAnswered + '"]').checked = true;
    } else {
        console.log('First time question')
    }

    document.getElementById("character").innerHTML = window.cards[counterId].character;
    document.getElementById("personage").innerHTML = window.cards[counterId].image;
    question.innerHTML = window.cards[counterId].description;
    answer1.textContent = window.cards[counterId].choices.a.label;
    answer2.textContent = window.cards[counterId].choices.b.label;
    answer3.textContent = window.cards[counterId].choices.c.label;

    // Deze if functies dienen om de knoppen zichtbaar of onzichtbaar te maken wanneer deze niet nodig zijn.
    if (counter == 0) {
        buttonPrev.classList.add('notvis');
    } else {
        buttonPrev.classList.remove('notvis');
    }
    if (counter > 4) {
       
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
    console.log(counter);
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

    console.log("Value: ", value)
    storeAnswer(counter, value);
    nextQuestion();
    console.log(counter);
});
// Wanneer je op 'VORIGE' klikt -> verandert image, personage, vraag en antwoorden naar de vorige vraag.
buttonPrev.addEventListener("click", function() {
    prevQuestion();
});
setQuestion(0);



//------------------------------------ CONTACT FORM
