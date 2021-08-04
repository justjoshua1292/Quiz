// List of my variables

var myQuestions = 0;
var timing = questions.length *30;
var timerLock;



//  My references for all of my DOM elements for the page
var questionsListEl= document.getElementById("my-questions");
var mytimerEl= document.getElementById("time");
var myChoicesEl = document.getElementById("choices");
var MySubmitBtn = document.getElementById("submit");
var MyInitalsEl = document.getElementById("names-initals");
var startBtn = document.getElementById("start");
var MyfeedbackEl = document.getElementById("feedback");

function startQuiz () {
    console.log (time)
    // Start screen should be hidden before the clock officially starts

var readyScreen = document.getElementById("start-up");
readyScreen.setAttribute("class", "start hide"); }

// Reveal questions
questionsListEl.setAttribute("class", " ");
// start of timer
timerLock= setInterval(function(){
    clockTick();
}, 100);

// show start time
mytimerEl.textContent = time;

console.log (time)

getQuestion ();

function getQuestion() {
    var questions = questions[myQuestions];
    questionsListEl.children[0].textContent = currentQuestion.title;
    while (myChoicesEl.hasChildNodes()) {
        myChoicesEl.removeChild(myChoicesEl.lastChild);
    }


    // Loop over selected choices

    for (var i=0; i <currentQuestion.myChoicesEl.length; i++) {

    //    creating new buttons for each choice
        var choiceButton = document.createElement("button");
        choiceButton.textContent = currentQuestion.choices[i];

        // Place display on page
        myChoicesEl.appendChild(choiceButton);
    }


    // Adding event listeners to each choice
    myChoicesEl.children[0].addEventListener("click", function(event) {
    questionsClick(myChoicesEl.children[0]);
    });
    myChoicesEl.children[1].addEventListener("click", function(event) {
     questionsClick(myChoicesEl.children[1]);
    });
    myChoicesEl.children[2].addEventListener("click", function(event) {
    questionsClick(myChoicesEl.children[2]);
    });
    myChoicesEl.children[3].addEventListener("click", function(event) {
    questionsClick(myChoicesEl.children[3]);
    });




}



