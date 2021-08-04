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


    // Loops

    for (var i=0; i <currentQuestion.myChoicesEl.length; i++) {

    }
}
