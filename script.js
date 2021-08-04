// List of my variables
var myQuestions = 0;
var time = questions.length * 30;
var timerLock;



//  My references for all of my DOM elements for the page
var questionsListEl= document.getElementById("my-questions");
var myTimerEl= document.getElementById("time");
var myChoicesEl = document.getElementById("choices");
var mySubmitBtn = document.getElementById("submit");
var myInitalsEl = document.getElementById("names-initals");
var startBtn = document.getElementById("start");
var myFeedbackEl = document.getElementById("feedback");

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
    questionsListEl.children[0].textContent = myQuestions.title;
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

 // flash right/wrong feedback on page 
 myFeedbackEl.setAttribute("class", "feedback");
 setInterval(function(){
   myFeedbackEl.setAttribute("class", "feedback hide");
 }, 100);

 // move to next question
 myQuestions++;

 // check to see if we've run out of questions
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

 // show final score when complete
 var finalScoreEl = document.getElementById("final-score");
 finalScoreEl.textContent = time;

 // hide questions 
 myquestionsEl.setAttribute("class", "hide");
}

function clockTick() {
 // update the time
 time--;
 myTimerEl.textContent = time;

 // check if user ran out of time during quiz
 if(time <= 0)
   quizEnd();
 
}

function saveScores () {
    var namesIntials = namesInitals.value.toUpperCase ();
    if (namesInitals === "") {
        alert("Blank input not allowed");
        return;
    }
    else if (namesInitals.length > 3){
        alert("Input has to be less than 10 characters");
        return;

    // get saved scores from localstorage, or if not any, set to empty array
    var highscores;
    if(JSON.parse(localStorage.getItem("highscores")) != null)
      highscores = JSON.parse(window.localStorage.getItem("highscores"));
    else
      highscores = [];
    // format new score object for current user
    var newestScores = {
      initials: initials,
      score: time
    };
    highscores.push(newestScores);
    // save to localstorage
    localStorage.setItem("highscores", JSON.stringify(highscores));
    // redirect to next page
    location.href = "savedscores.html";
  }
}

function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
    if(event.keyCode === 13)
      saveHighscore();
}

// user clicks button to submit initials
mySubmitBtn.onclick = saveHighscore;

// user clicks button to start quiz
myStartBtn.onclick = startQuiz;

myInitialsEl.onkeyup = checkForEnter;