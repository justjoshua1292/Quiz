var highscores = JSON.parse(localStorage.getItem("highscores"));
var scorelistol = document.getElementById("scoring");

for (let index = 0; index < highscores.length; index++) {
    var newli = document.createElement("li")
    newli.textContent=highscores[index].initals+" - " + highscores[index].score
    scorelistol.appendChild(newli)
}

function clearHighscores () {
    localStorage.clear ();
    location.reload ();
}

var clearButton = document.getElementById("clearBtn");
clearButton.addEventListener("click", clearHighscores);
