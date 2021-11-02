var quizButton = document.querySelector('#quiz-button');

var myQuestions = [
    {
        questionText: "Choose the correct HTML tag to ensure that your text is bold",
        options: [
            "bold",
            "b",
            "baby",
            "underline"
        ],
        correctAnswer: "b"
    },
    {
        questionText: "How do you insert a comment in any CSS file?",
        options: [
            "blah",
            "//*this is a comment */",
            "Just write a comment",
            "//..."
        ],
        correctAnswer: "//*this is a comment*//"
    },
    {
        questionText: "What does JS stand for?",
        options: [
            "JavaSTANd",
            "JavaScript",
            "JavaStick",
            "JavaSpoon"
        ],
        correctAnswer: "JavaScript"
    },
    {
        questionText: "What property is used to change the background color?",
        options: [
            "bg-color",
            "new-color",
            "my-color",
            "background-color"
        ],
        correctAnswer: "background-color"
    },
    {
        questionText: "HTML stands for what?",
        options: [
            "Hit my line",
            "HyperText Markup Language",
            "HyperToken Markup Language",
            "HyperText Machine Language",
        ],
        correctAnswer: "HyperText Markup Language"
    }

]

var questionChoicesIndex = 0;
var time = myQuestions.length * 100;
var myTimer;

// myQuestions[0].options[1]


function beginQuiz () {
    // var welcomeDiv = document.querySelector("#welcome-div");
    var welcomeDiv = document.getElementById("welcome-div")

    welcomeDiv.style.display = "none";

    var questionDiv = document.getElementById("question-div");

    questionDiv.style.display = "block";

    myTimer = setInterval(function() {
        time--;
        var timeSpan = document.getElementById("time-span");
        timeSpan.textContent = time;
    }, 1000);

    changeQuestion();
}

function checkAnswer () {
    if (this.textContent !== myQuestions[questionChoicesIndex-1].correctAnswer) {
    //  subtract time
        time-= 15;
    
        if (time < 0) {
            time = 0;
        }
    }

    changeQuestion()
}

function changeQuestion () {
    if(questionChoicesIndex < myQuestions.length) {
        var questionH2 = document.getElementById("question-h2")
        var option1Button = document.getElementById("option1-button")
        var option2Button = document.getElementById("option2-button")
        var option3Button = document.getElementById("option3-button")
        var option4Button = document.getElementById("option4-button")
        
        questionH2.textContent = myQuestions[questionChoicesIndex].questionText;
    
        option1Button.textContent =  myQuestions[questionChoicesIndex].options[0];
        option2Button.textContent =  myQuestions[questionChoicesIndex].options[1];
        option3Button.textContent =  myQuestions[questionChoicesIndex].options[2];
        option4Button.textContent =  myQuestions[questionChoicesIndex].options[3];

    
        option1Button.addEventListener("click", checkAnswer);
        option2Button.addEventListener("click", checkAnswer);
        option3Button.addEventListener("click", checkAnswer);
        option4Button.addEventListener("click", checkAnswer);
        
    
        questionChoicesIndex++;
    } else {
        // when the quiz ends
        alert("You finished the quiz!")
        clearInterval(myTimer);

        var timeH3 = document.getElementById("time-h3");
        timeH3.style.display = "none";

        var questionDiv = document.getElementById("question-div");
        questionDiv.style.display = "none";

        var highscoreDiv = document.getElementById("highscore-table-div");
        highscoreDiv.style
        .display = "block";

        var scoreSpan = document.getElementById("score-span");
        scoreSpan.textContent = time;
    }
    
}

function saveScore() {
    var score = time;
    var initials = document.getElementById("initials-input").value;

    alert(`Your score: ${score}. Thanks for taking the quiz, ${initials}!`)

    localStorage.setItem("score", JSON.stringify({
        score: score,
        initials: initials
    }))
}

quizButton.addEventListener("click", beginQuiz)

