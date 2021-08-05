// List of my variables
var currentQuestion = 0
var time = questions.length * 100;
var timerLock;



//  My references for all of my DOM elements for the page
var questionsListEl= document.getElementById("my-questions");
var myTimerEl= document.getElementById("time");
var myChoicesEl = document.getElementById("choices");
var mySubmitBtn = document.getElementById("submit");
var myInitalsEl = document.getElementById("names-initals");
var myStartBtn = document.getElementById("start-on");
var myFeedbackEl = document.getElementById("feedback");

function startQuiz () {
    console.log (time)
    // Start screen should be hidden before the clock officially starts

var readyScreen = document.getElementById("start-up");
readyScreen.setAttribute("class", "start hide"); }
myStartBtn.onclick = startQuiz;
// Reveal questions
questionsListEl.setAttribute("class", " ");
// start of timer
timerLock= setInterval(function(){
    clockTick();
}, 1000);

// show start time
myTimerEl.textContent = time;
console.log (time)


questionsListEl.children[0].textContent = myQuestions.title;
while (myChoicesEl.hasChildNodes()) {
myChoicesEl.removeChild(myChoicesEl.lastChild);
}
    
    // Loop over selected choices

    for (var i=0; i <questions[currentQuestion].choices.length; i++) {
    //    creating new buttons for each choice
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
    var choiceButton = document.createElement("button");
    choiceButton.textContent = myQuestions.choices[i];
      // Place display on page
     myChoicesEl.appendChild(choiceButton);

    }
function questionsClick(answerChoice) {
    if (answerChoice.textContent != questions[myQuestions].answer){
// penalize time
    time-=10;
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
 }, 1000);

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
 clearInterval(mytimerLock);
 myTimerEl.textContent = time;

 // show end screen
 var endScreenEl = document.getElementById("end-screen");
 endScreenEl.setAttribute("class", " ");

 // show final score when complete
 var finalScoreEl = document.getElementById("final-score");
 finalScoreEl.textContent = time;

 // hide questions 
 myQuestionsEl.setAttribute("class", "hide");
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


myInitialsEl.onkeyup = checkForEnter;