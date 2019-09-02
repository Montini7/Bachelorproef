// Variabele maken voor de antwoord-buttons
const buttonNext = document.getElementById("buttonNext");
const buttonPrev = document.getElementById("buttonPrev");

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");


let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let radio4 = document.getElementById("radio4");

let inputRadioBtn = document.getElementsByClassName("radioBtn");

let geldwolf = 0;
let opportunist = 0;
let wereldverbeteraar = 0;
let visionair = 0;
let revolutionair = 0;
let analist = 0;


// Aantal vragen
const questionsCount = 9;

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
answer3.addEventListener("click", function() {
    document.getElementById("radio3").checked = true;
});
answer4.addEventListener("click", function() {
    document.getElementById("radio4").checked = true;
});



// deze functie definieert het veranderen van een vraag.
function setQuestion(counterId) {

    let previousAnswered = get("q" + counterId) || false;

    if (previousAnswered) {
        document.querySelector('input[value="' + previousAnswered + '"]').checked = true;
    } else {
        // console.log('First time question')
    }

    document.getElementById("personage-mobile").innerHTML = window.cards[counterId].image;
    document.getElementById("personage").innerHTML = window.cards[counterId].image;
    question.innerHTML = window.cards[counterId].description;
    answer1.textContent = window.cards[counterId].choices.a.label;
    answer2.textContent = window.cards[counterId].choices.b.label;
    answer3.textContent = window.cards[counterId].choices.c.label;
    answer4.textContent = window.cards[counterId].choices.d.label;



   

    // Deze if functies dienen om de knoppen zichtbaar of onzichtbaar te maken wanneer deze niet nodig zijn.
    if (counter == 0) {
        buttonPrev.classList.add('notvis');
    } else {
        buttonPrev.classList.remove('notvis');
    }
    if (counter > 8) {
       
        buttonNext.addEventListener("click", function() {
            buttonPrev.classList.add('notvis');
            buttonNext.classList.add('notvis');
            buttonEnd.classList.remove('notvis');
            set('wereldverbeteraar', wereldverbeteraar);
            set('geldwolf', geldwolf);
            set('visionair', visionair);
            set('opportunist', opportunist);
            set('revolutionair', revolutionair);
            set('analist', analist);
        });
    } else {
        buttonPrev.classList.remove('notvis');
    }
    // setScore();
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
    storeAnswer(counter, value);
    // ADVIES TYPE ONDERNEMER
    let selectedAnswer = get("q" + counter) || false;
    

    switch(selectedAnswer) {
        case 'a': 
                if (window.cards[counter].choices.a.values == "wereldverbeteraar") {
                    wereldverbeteraar ++;   
                } else if (window.cards[counter].choices.a.values == "geldwolf"){
                    geldwolf ++;
                } else if (window.cards[counter].choices.a.values == "opportunist"){
                    opportunist ++;
                } else if (window.cards[counter].choices.a.values == "visionair"){
                    visionair ++;
                } else if (window.cards[counter].choices.a.values == "revolutionair"){
                    revolutionair ++;
                } else if (window.cards[counter].choices.a.values == "analist"){
                    analist ++;
                }
                
          break;
        case 'b':
                if (window.cards[counter].choices.b.values == "wereldverbeteraar") {
                    wereldverbeteraar ++;   
                } else if (window.cards[counter].choices.b.values == "geldwolf"){
                    geldwolf ++;
                } else if (window.cards[counter].choices.b.values == "opportunist"){
                    opportunist ++;
                } else if(window.cards[counter].choices.b.values == "visionair"){
                    visionair ++;
                } else if (window.cards[counter].choices.b.values == "revolutionair"){
                    revolutionair ++;
                } else if (window.cards[counter].choices.b.values == "analist"){
                    analist ++;
                }
          break;
        case 'c':
            if (window.cards[counter].choices.c.values == "wereldverbeteraar") {
                wereldverbeteraar ++;   
            } else if (window.cards[counter].choices.c.values == "geldwolf"){
                geldwolf ++;
            } else if (window.cards[counter].choices.c.values == "opportunist"){
                opportunist ++;
            } else if(window.cards[counter].choices.c.values == "visionair"){
                visionair ++;
            } else if (window.cards[counter].choices.c.values == "revolutionair"){
                revolutionair ++;
            } else if (window.cards[counter].choices.c.values == "analist"){
                analist ++;
            }

         break;
        case 'd':
            if (window.cards[counter].choices.d.values == "wereldverbeteraar") {
                wereldverbeteraar ++;   
            } else if (window.cards[counter].choices.d.values == "geldwolf"){
                geldwolf ++;
            } else if (window.cards[counter].choices.d.values == "opportunist"){
                opportunist ++;
            } else if(window.cards[counter].choices.d.values == "visionair"){
                visionair ++;
            } else if (window.cards[counter].choices.d.values == "revolutionair"){
                revolutionair ++;
            } else if (window.cards[counter].choices.d.values == "analist"){
                analist ++;
            }
         break;
        default:break;
    }
          // code block
      
    // console.log('opportunist is ' + opportunist);
    // console.log('wereldverbeteraar is ' + wereldverbeteraar);
    // console.log('geldwolf is ' + geldwolf);
    // console.log('visionair is ' + visionair);
    console.log('wereldverbeteraar ' + wereldverbeteraar);
    console.log('opportunist ' + opportunist);
    console.log('revolutionair ' +revolutionair);
    console.log('geldwolf ' +geldwolf);
    console.log('analist ' +analist);
    console.log('visionair ' +visionair);
    
    nextQuestion();

});
// Wanneer je op 'VORIGE' klikt -> verandert image, personage, vraag en antwoorden naar de vorige vraag.
buttonPrev.addEventListener("click", function() {
    prevQuestion();
});
setQuestion(0);



