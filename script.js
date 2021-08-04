var myQuestions = 0;
var timing = questions.length *30;
var timerLock;
var sfxCorrect = new Audio ("");
var sfxIncorrect = new Audio ("");

var questionsListEl= document.getElementById("my-questions");
var mytimerEl= document.getElementById("time");
var myChoicesEl = document.getElementById("choices");
var MySubmitBtn = document.getElementById("submit");
var MyInitalsEl = document.getElementById("names-initals");
var startBtn = document.getElementById("start");
var MyfeedbackEl = document.getElementById("feedback");