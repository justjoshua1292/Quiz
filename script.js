// List of my variables
var currentQuestionindex = 0
var time = questions.length * 100;
var timerId;

var highscores = JSON.parse(localStorage.getItem('highscores')) || []


//  My references for all of my DOM elements for the page
var questionsEl= document.getElementById("questions");
var TimerEl= document.getElementById("time");
var ChoicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var initalsEl = document.getElementById("initals");
var startBtn = document.getElementById("start");
var FeedbackEl = document.getElementById("feedback");

function startQuiz () {

       var startScreenEl = document.getElementById("start-screen");
       startScreenEl.setAttribute("class", "hide");
   
       questionsEl.removeAttribute("class");
   
       timerId = setInterval(clockTick, 1000);
   
       TimerEl.textContent = time;
   
       getQuestion();
   }
   
//    startBtn.addEventListener("click", startQuiz) 




function getQuestion () {
    // grabbing the 1st question out of the array we've built"
    var currentQuestion = questions [currentQuestionindex];

    // update front title page with 1st question on the quiz
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    // clears out the old questions.
    ChoicesEl.innerHTML = "";

    // for loop we've created
    currentQuestion.choices.forEach(function(choice, i)
     {

    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", "choice");
 
    choiceNode.textContent = i + 1 +". " + choice;
 
    choiceNode.onclick = questionClick;
 
    ChoicesEl.appendChild(choiceNode);

    });
}

function questionClick () {
if (this.value !== questions[currentQuestionindex].answer); {
//  subtract time
    time-= 15;

    if (time < 0) {
        time = 0;
    }
    
    // new time should show up on page
    TimerEl.textContent = time;

    // next question
    currentQuestionindex++;

    if (currentQuestionindex === questions.length) {
        quizEnd();
    } else {
        getQuestion ();
    }
}
}
        function quizEnd () {
    clearInterval(timerId);

var endScreenEl = document.getElementById("end-screen");
endScreenEl.removeAttribute("class");

var finalScoreEl = document.getElementById("final-score");
finalScoreEl.textContent= time;

    questionsEl.setAttribute("class", "hide");
}

function clockTick() {
// modifed time
time --;
TimerEl.textContent = time;

if (time <= 0) {
    quizEnd();
}

}
function saveScores () {
    var initals = initalsEl.value.toUpperCase ();
    if (initals === "") {
        alert("Blank input not allowed");
        return;
    }
    else if (initals.length > 3){
        alert("Input has to be less than 10 characters");
        return; 
    }

    // get saved scores from localstorage, or if not any, set to empty array
    var highscores;
    if(JSON.parse(localStorage.getItem("highscores")) != null)
      highscores = JSON.parse(window.localStorage.getItem("highscores"));
    else
      highscores = [];
    // format new score object for current user
    var newestScores = {
      initals: initals,
      score: time
    };
    highscores.push(initals);
    // save to localstorage
    localStorage.setItem("highscores", JSON.stringify(highscores));
    // redirect to next page
    location.href = "savedscores.html";
  }


function checkForEnter(event) {
  // check if event key is enter
    // saveHighscore
    if(event.keyCode === 13)
      saveHighscore();
}

// user clicks button to submit initials
submitBtn.onclick = saveScores;
startBtn.onclick = startQuiz;




startBtn.addEventListener("click", startQuiz) 