var savedScore = JSON.parse(localStorage.getItem("score"));

var nameSpan = document.getElementById("name");
nameSpan.textContent = savedScore.initials;

var scoreSpan = document.getElementById("score");
scoreSpan.textContent = savedScore.score;