// List of my variables

var myQuestions = 0;
var timing = questions.length *30;
var timerLock;



//  My references for all of my DOM elements for the page
var questionsListEl= document.getElementById("my-questions");
var myTimerEl= document.getElementById("time");
var myChoicesEl = document.getElementById("choices");
var MySubmitBtn = document.getElementById("submit");
var MyInitalsEl = document.getElementById("names-initals");
var startBtn = document.getElementById("start");
var MyFeedbackEl = document.getElementById("feedback");

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
myTimerEl.textContent = time;

console.log (time)

getQuestion ();

function getQuestion() {
}
    var questions = questions[myQuestions];
    questionsListEl.children[0].textContent = currentQuestion.title;
    while (myChoicesEl.hasChildNodes()) {
    }
        myChoicesEl.removeChild(myChoicesEl.lastChild);
    


    // Loop over selected choices

    for (var i=0; i <currentQuestion.myChoicesEl.length; i++) {
    }

    //    creating new buttons for each choice
        var choiceButton = document.createElement("button");
        choiceButton.textContent = currentQuestion.choices[i];

        // Place display on page
        myChoicesEl.appendChild(choiceButton);



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

function questionsClick(answerChoice) {
    if (answerChoice.textContent != questions[myQuestions].answer){
// penalize time
    time-=20;
// display new time on page (should work)
    MyFeedbackEl.textContent = "Incorrect";
    }

    else {
        MyFeedbackEl.textContent= "Correct";
    }
}

 // flash right/wrong feedback on page for half a second
 myFeedbackEl.setAttribute("class", "feedback");
 setInterval(function(){
   myFeedbackEl.setAttribute("class", "feedback hide");
 }, 100);

 // move to next question
 myQuestions++;

 // check if we've run out of questions
 if(myQuestions === questions.length)
   // quizEnd
   quizEnd();
 // else 
 else
   // getQuestion
   getQuestion();


function quizEnd() {
 // stop timer
 clearInterval(timerId);
 myTimerEl.textContent = time;

 // show end screen
 var endScreenEl = document.getElementById("end-screen");
 endScreenEl.setAttribute("class", " ");

 // show final score
 var finalScoreEl = document.getElementById("final-score");
 finalScoreEl.textContent = time;

 // hide questions section
 questionsEl.setAttribute("class", "hide");
}

function clockTick() {
 // update time
 time--;
 timerEl.textContent = time;

 // check if user ran out of time
 if(time <= 0)
   quizEnd();
 
}
